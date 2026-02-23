const express = require("express");

const {
  addUserController,
  userLoginController,
} = require("../controllers/users");

const route = express.Router();

const { authMiddleware } = require("../middlewares/auth");

/**
 * @swagger
 * /addUser:
 *   post:
 *     summary: Add User
 *     description: Add User
 *     tags:
 *       - Users
 *     parameters:
 *       - in: body
 *         name: body
 *         description: User object
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: User added successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
route.post("/addUser", authMiddleware, addUserController);

/**
 * @swagger
 * /login:
 *   post:
 *     summary: User Login
 *     description: User Login
 *     tags:
 *       - Users
 *     parameters:
 *       - in: body
 *         name: body
 *         description: User object
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: User logged in successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
route.post("/login", userLoginController);

module.exports = { route };