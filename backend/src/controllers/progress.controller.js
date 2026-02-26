const Progress = require('../models/Progress');
const QuizAttempt = require('../models/QuizAttempt');
const Enrollment = require('../models/Enrollment');

exports.markModuleComplete = async (req, res, next) => {
  try {
    const { courseId, moduleId } = req.body;
    const userId = req.user.userId;

    // Check enrollment
    const enrollment = await Enrollment.findOne({ userId, courseId });
    if (!enrollment) {
      return res.status(403).json({ error: 'Not enrolled in this course' });
    }

    let progress = await Progress.findOne({ userId, courseId, moduleId });

    if (!progress) {
      progress = new Progress({
        userId,
        courseId,
        moduleId,
        completed: true,
        completedAt: new Date(),
      });
    } else {
      if (!progress.completed) {
        progress.completed = true;
        progress.completedAt = new Date();
      }
    }

    await progress.save();

    res.json(progress);
  } catch (error) {
    next(error);
  }
};

exports.getMyProgress = async (req, res, next) => {
  try {
    const userId = req.user.userId;

    const progress = await Progress.find({ userId }).populate('courseId');

    // Group by course
    const progressByCourse = {};
    progress.forEach((p) => {
      if (!progressByCourse[p.courseId._id]) {
        progressByCourse[p.courseId._id] = {
          course: p.courseId,
          totalModules: 0,
          completedModules: 0,
          modules: [],
        };
      }
      progressByCourse[p.courseId._id].totalModules++;
      if (p.completed) {
        progressByCourse[p.courseId._id].completedModules++;
      }
      progressByCourse[p.courseId._id].modules.push(p);
    });

    const summary = Object.values(progressByCourse).map((p) => ({
      ...p,
      completionPercentage: p.totalModules > 0 ? (p.completedModules / p.totalModules) * 100 : 0,
    }));

    res.json({
      count: summary.length,
      summary,
    });
  } catch (error) {
    next(error);
  }
};

exports.submitQuiz = async (req, res, next) => {
  try {
    const { courseId, moduleId, answers, timeTakenSec } = req.body;
    const userId = req.user.userId;

    // Validation
    if (!courseId || !moduleId || answers === undefined) {
      return res.status(400).json({ error: 'courseId, moduleId, and answers are required' });
    }

    // Check enrollment
    const enrollment = await Enrollment.findOne({ userId, courseId });
    if (!enrollment) {
      return res.status(403).json({ error: 'Not enrolled in this course' });
    }

    // Simple scoring: count correct answers
    const score = Array.isArray(answers) ? Math.min(answers.filter((a) => a).length * 10, 100) : 0;

    const quizAttempt = new QuizAttempt({
      userId,
      courseId,
      moduleId,
      score,
      timeTakenSec: timeTakenSec || 0,
      passed: score >= 60,
    });

    await quizAttempt.save();

    res.status(201).json({
      score,
      passed: score >= 60,
      feedback: score >= 60 ? 'Great job!' : 'Try again to improve your score.',
      attempt: quizAttempt,
    });
  } catch (error) {
    next(error);
  }
};
