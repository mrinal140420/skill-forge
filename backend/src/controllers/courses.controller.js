const Course = require('../models/Course');

exports.getAllCourses = async (req, res, next) => {
  try {
    const { search, category, level, sort, featured } = req.query;

    let filter = {};

    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { tags: { $in: [new RegExp(search, 'i')] } },
      ];
    }

    if (category) {
      filter.category = category;
    }

    if (level) {
      filter.level = level;
    }

    let query = Course.find(filter);

    // Handle sorting
    if (sort === 'newest') {
      query = query.sort({ createdAt: -1 });
    } else if (sort === 'rating') {
      query = query.sort({ rating: -1 });
    } else if (sort === 'popularity') {
      query = query.sort({ rating: -1, durationHours: 1 });
    } else {
      query = query.sort({ createdAt: -1 });
    }

    // Featured courses (limit to 6)
    if (featured === 'true') {
      query = query.limit(6);
    }

    const courses = await query.exec();

    res.json({
      count: courses.length,
      courses,
    });
  } catch (error) {
    next(error);
  }
};

exports.getCourseById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const course = await Course.findById(id).populate('prerequisites');

    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    res.json(course);
  } catch (error) {
    next(error);
  }
};

exports.createCourse = async (req, res, next) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.status(201).json(course);
  } catch (error) {
    next(error);
  }
};
