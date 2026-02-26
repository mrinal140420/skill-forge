const express = require('express');
const router = express.Router();
const enrollController = require('../controllers/enroll.controller');
const authMiddleware = require('../middlewares/auth.middleware');

/**
 * @swagger
 * /api/enrollments:
 *   post:
 *     summary: Enroll in a course
 *     tags: [Enrollments]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               courseId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Successfully enrolled
 */
router.post('/', authMiddleware, enrollController.enrollInCourse);

/**
 * @swagger
 * /api/enrollments/me:
 *   get:
 *     summary: Get my enrollments
 *     tags: [Enrollments]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of enrollments
 */
router.get('/me', authMiddleware, enrollController.getMyEnrollments);

/**
 * @swagger
 * /api/enrollments/{id}:
 *   get:
 *     summary: Get enrollment details
 *     tags: [Enrollments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Enrollment details
 */
router.get('/:id', authMiddleware, enrollController.getEnrollmentDetails);

module.exports = router;
