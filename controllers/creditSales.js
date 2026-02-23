const { CreditSalesModel } = require("../models/creditSales");

/**
 * Add Credit Sales Controller is used to add credit sales
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @param {Function} next - Next middleware
 * @returns {Object} - Response object
 */
const addCreditSalesController = async (req, res) => {
  try {
    const {
      buyerName,
      nationalId,
      location,
      contact,
      amountDueUgx,
      salesAgentName,
      dueDate,
      produceName,
      produceType,
      tonnageKg,
      dispatchDate,
    } = req.body;

    // Check if all required fields are provided
    if (
      !buyerName ||
      !nationalId ||
      !location ||
      !contact ||
      !amountDueUgx ||
      !salesAgentName ||
      !dueDate ||
      !produceName ||
      !produceType ||
      !tonnageKg ||
      !dispatchDate
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // create new credit sales
    const creditSales = new CreditSalesModel({
      buyerName,
      nationalId,
      location,
      contact,
      amountDueUgx,
      salesAgentName,
      dueDate,
      produceName,
      produceType,
      tonnageKg,
      dispatchDate,
    });
    await creditSales.save();
    res
      .status(201)
      .json({ message: "Credit Sales Added Successfuly", creditSales });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

/**
 * Get Credit Sales Controller is used to get all credit sales
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @param {Function} next - Next middleware
 * @returns {Object} - Response object
 */
const getCreditSalesController = async (req, res) => {
  try {
    // get all credit sales
    const creditSales = await CreditSalesModel.find();
    res
      .status(200)
      .json({ message: "Credit Sales retrieved Successfuly", creditSales });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
module.exports = { addCreditSalesController, getCreditSalesController };
