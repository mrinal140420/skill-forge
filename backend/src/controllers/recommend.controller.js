const axios = require('axios');
const Course = require('../models/Course');
const Enrollment = require('../models/Enrollment');
const Progress = require('../models/Progress');
const QuizAttempt = require('../models/QuizAttempt');

exports.getRecommendations = async (req, res, next) => {
  try {
    const userId = req.user.userId;

    // Gather user data
    const enrollments = await Enrollment.find({ userId }).select('courseId');
    const enrolledCourseIds = enrollments.map((e) => e.courseId.toString());

    const progress = await Progress.find({ userId });
    const completedModules = progress.filter((p) => p.completed).map((p) => p.moduleId);

    const quizAttempts = await QuizAttempt.find({ userId });

    // Try to call ML service
    try {
      const mlResponse = await axios.post(
        `${process.env.ML_SERVICE_URL}/recommend`,
        {
          userId,
          enrolledCourses: enrolledCourseIds,
          completedModules,
          quizAttempts: quizAttempts.map((qa) => ({
            courseId: qa.courseId.toString(),
            score: qa.score,
            passed: qa.passed,
          })),
        },
        { timeout: process.env.ML_REQUEST_TIMEOUT || 1200 }
      );

      return res.json(mlResponse.data);
    } catch (mlError) {
      console.warn('ML service unavailable, using fallback recommendations:', mlError.message);
    }

    // Fallback: Get popular courses that user hasn't enrolled in
    const recommendedCourses = await Course.find({
      _id: { $nin: enrolledCourseIds },
    })
      .sort({ rating: -1 })
      .limit(8);

    res.json({
      recommendedCourses: recommendedCourses.map((course) => ({
        courseId: course._id,
        title: course.title,
        score: course.rating || 0,
        reason: 'Popular course recommended based on your profile.',
      })),
      recommendedTopics: ['DSA', 'DBMS', 'System Design'],
    });
  } catch (error) {
    next(error);
  }
};
