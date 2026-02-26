const express = require('express');
const router = express.Router();
const progressController = require('../controllers/progress.controller');
const authMiddleware = require('../middlewares/auth.middleware');

/**
 * @swagger
 * /api/progress/complete:
 *   post:
 *     summary: Mark module as complete
 *     tags: [Progress]
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
 *               moduleId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Progress updated
 */
router.post('/complete', authMiddleware, progressController.markModuleComplete);

/**
 * @swagger
 * /api/progress/me:
 *   get:
 *     summary: Get my progress
 *     tags: [Progress]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Progress summary
 */
router.get('/me', authMiddleware, progressController.getMyProgress);

/**
 * @swagger
 * /api/quiz/submit:
 *   post:
 *     summary: Submit quiz attempt
 *     tags: [Quiz]
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
 *               moduleId:
 *                 type: string
 *               answers:
 *                 type: array
 *               timeTakenSec:
 *                 type: number
 *     responses:
 *       201:
 *         description: Quiz submitted
 */
router.post('/submit', authMiddleware, progressController.submitQuiz);

module.exports = router;
