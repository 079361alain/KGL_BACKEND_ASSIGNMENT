const { ProcurementModel } = require("../models/procurement");

/**
 * Add Procurement Controller is used to add procurement
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @param {Function} next - Next middleware
 * @returns {Object} - Response object
 */
const addProcurementController = async (req, res) => {
  try {
    const procurement = new ProcurementModel(req.body);
    await procurement.save();
    res.status(201).json({ Message: "Procurement created Successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * Get Procurement Controller is used to get all procurement
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @param {Function} next - Next middleware
 * @returns {Object} - Response object
 */
const getProcurementController = async (req, res) => {
  try {
    const procurement = await ProcurementModel.find();
    res
      .status(200)
      .json({ Message: "Procurement retrieved Successfuly", procurement });
  } 
  catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { addProcurementController, getProcurementController };
