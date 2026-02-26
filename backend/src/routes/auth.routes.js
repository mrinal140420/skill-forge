const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const { authLimiter } = require('../middlewares/rateLimit.middleware');

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                 user:
 *                   $ref: '#/components/schemas/User'
 */
router.post('/register', authLimiter, authController.register);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                 user:
 *                   $ref: '#/components/schemas/User'
 */
router.post('/login', authLimiter, authController.login);

/**
 * @swagger
 * /api/auth/me:
 *   get:
 *     summary: Get current user
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Current user data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 */
router.get('/me', authMiddleware, authController.me);

module.exports = router;
