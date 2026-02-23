const mongoose = require("mongoose");

// Cash Sales Schema
const cashSalesSchema = new mongoose.Schema({

  produceName: { 
    type: String,
     required: true,
      trim: true },

  tonnageKg: { 
    type: Number,
     required: true,
      min: 1 
    },
  amountPaidUgx: { 
    type: Number, 
    required: true, 
    min: 10000 },

  buyerName: { 
    type: String,
     required: true, 
     minlength: 2,
      trim: true },

  salesAgentName: { 
    type: String, 
    required: true,
     minlength: 2, 
     trim: true },

  date: { 
    type: String,
     required: true },

  time: { 
    type: String, 
    required: true },
});

const CashSalesModel = mongoose.model("cash_sales", cashSalesSchema);

module.exports = { CashSalesModel };