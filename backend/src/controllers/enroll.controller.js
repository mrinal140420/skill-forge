const Enrollment = require('../models/Enrollment');
const Course = require('../models/Course');
const User = require('../models/User');

exports.enrollInCourse = async (req, res, next) => {
  try {
    const { courseId } = req.body;
    const userId = req.user.userId;

    // Validate course exists
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    // Check if already enrolled
    const existingEnrollment = await Enrollment.findOne({ userId, courseId });
    if (existingEnrollment) {
      return res.status(400).json({ error: 'Already enrolled in this course' });
    }

    // Create enrollment
    const enrollment = new Enrollment({
      userId,
      courseId,
    });

    await enrollment.save();

    res.status(201).json(enrollment);
  } catch (error) {
    next(error);
  }
};

exports.getMyEnrollments = async (req, res, next) => {
  try {
    const userId = req.user.userId;

    const enrollments = await Enrollment.find({ userId })
      .populate('courseId')
      .sort({ enrolledAt: -1 });

    res.json({
      count: enrollments.length,
      enrollments,
    });
  } catch (error) {
    next(error);
  }
};

exports.getEnrollmentDetails = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = req.user.userId;

    const enrollment = await Enrollment.findById(id).populate('courseId userId');

    if (!enrollment) {
      return res.status(404).json({ error: 'Enrollment not found' });
    }

    if (enrollment.userId._id.toString() !== userId) {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    res.json(enrollment);
  } catch (error) {
    next(error);
  }
};
