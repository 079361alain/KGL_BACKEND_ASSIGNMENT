const express = require("express");
const {
  addCreditSalesController,
  getCreditSalesController,
} = require("../controllers/creditSales");
const route = express.Router();
const {
  authMiddleware,
  isSalesAgentMiddleware,
  isManagerMiddleware,
} = require("../middlewares/auth");

/**
 * @swagger
 * /addCreditSales:
 *   post:
 *     summary: Add Credit Sales
 *     description: Add Credit Sales
 *     tags:
 *       - Credit Sales
 *     parameters:
 *       - in: body
 *         name: body
 *         description: Credit Sales object
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/CreditSales'
 *     responses:
 *       200:
 *         description: Credit Sales added successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreditSales'
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
route.post(
  "/addCreditSales",
  authMiddleware,
  isSalesAgentMiddleware,
  addCreditSalesController,
);

/**
 * @swagger
 * /getCreditSales:
 *   get:
 *     summary: Get Credit Sales
 *     description: Get Credit Sales
 *     tags:
 *       - Credit Sales
 *     responses:
 *       200:
 *         description: Credit Sales retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreditSales'
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
route.get(
  "/getCreditSales",
  authMiddleware,
  isManagerMiddleware,
  getCreditSalesController,
);

module.exports = { route };
