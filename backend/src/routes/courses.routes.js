const express = require('express');
const router = express.Router();
const coursesController = require('../controllers/courses.controller');
const authMiddleware = require('../middlewares/auth.middleware');

/**
 * @swagger
 * /api/courses:
 *   get:
 *     summary: Get all courses with filters
 *     tags: [Courses]
 *     parameters:
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *           enum: [DSA, DBMS, OS, CN, OOP, System Design, AI/ML Basics, Cyber Security]
 *       - in: query
 *         name: level
 *         schema:
 *           type: string
 *           enum: [Beginner, Intermediate, Advanced]
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           enum: [newest, rating, popularity]
 *       - in: query
 *         name: featured
 *         schema:
 *           type: boolean
 *     responses:
 *       200:
 *         description: List of courses
 */
router.get('/', coursesController.getAllCourses);

/**
 * @swagger
 * /api/courses/{id}:
 *   get:
 *     summary: Get course details
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Course details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Course'
 */
router.get('/:id', coursesController.getCourseById);

/**
 * @swagger
 * /api/courses:
 *   post:
 *     summary: Create a new course (admin only)
 *     tags: [Courses]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               category:
 *                 type: string
 *               level:
 *                 type: string
 *               durationHours:
 *                 type: number
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Course created
 */
router.post('/', authMiddleware, coursesController.createCourse);

module.exports = router;
