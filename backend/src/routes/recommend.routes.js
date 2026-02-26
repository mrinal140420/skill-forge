const express = require('express');
const router = express.Router();
const recommendController = require('../controllers/recommend.controller');
const authMiddleware = require('../middlewares/auth.middleware');

/**
 * @swagger
 * /api/recommendations/me:
 *   get:
 *     summary: Get personalized course recommendations
 *     tags: [Recommendations]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Recommended courses and topics
 */
router.get('/me', authMiddleware, recommendController.getRecommendations);

module.exports = router;
