const { CashSalesModel } = require("../models/cashsales");

/**
 * Add Cash Sales Controller is used to add cash sales
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @param {Function} next - Next middleware
 * @returns {Object} - Response object
 */
const addCashSalesController = async (req, res) => {
  try {
    const {
      produceName,
      tonnageKg,
      amountPaidUgx,
      buyerName,
      salesAgentName,
      date,
      time,
    } = req.body;

    // Check if all required fields are provided
    if (
      !produceName ||
      !tonnageKg ||
      !amountPaidUgx ||
      !buyerName ||
      !salesAgentName ||
      !date ||
      !time
    ) {
      res.status(400).json({ Message: "All fields are required" });
    }

    // create new cash sales
    const cashSales = new CashSalesModel({
      produceName,
      tonnageKg,
      amountPaidUgx,
      buyerName,
      salesAgentName,
      date,
      time,
    });

    await cashSales.save();

    res
      .status(201)
      .json({ Message: "Cash Sales created Successfully", cashSales });
  } catch (err) {
    res.status(500).json({ Message: err.message });
  }
};

/**
 * Get Cash Sales Controller is used to get all cash sales
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @param {Function} next - Next middleware
 * @returns {Object} - Response object
 */
const getCashSalesController = async (req, res) => {
  try {
    // get all cash sales
    const cashSales = await CashSalesModel.find();
    res
      .status(200)
      .json({ Message: "Cash Sales retrieved Successfuly", cashSales });
  } catch (error) {
    console.log(error);
    res.status(500).json({ Message: "Internal Server Error" });
  }
};

module.exports = { addCashSalesController, getCashSalesController };
