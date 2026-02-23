const mongoose = require("mongoose");

// credit sales schema
const creditSalesSchema = new mongoose.Schema({

  buyerName: {
     type: String,
      required: true,
       minlength: 2, 
       trim: true },

  nationalId: {
     type: String,
      required: true, 
      trim: true 
    },
  location: { 
    type: String,
    required: true,
    minlength: 2,
     trim: true },

  contact: { 
    type: String, 
    required: true
 },
  amountDueUgx: {
    type: Number,
    required: true, min: 10000 },
  salesAgentName: { 
    type: String, 
    required: true, 
    minlength: 2, trim: true 
},
  dueDate: {
     type: String,
      required: true 
    },

  produceName: { 
    type: String, 
    required: true, 
    trim: true },

  produceType: { 
    type: String,
     required: true, 
     minlength: 2, 
     trim: true 
    },
  tonnageKg: { 
    type: Number,
     required: true, 
     min: 1 
    },
  dispatchDate: {
     type: String, 
     required: true },
});

const CreditSalesModel = mongoose.model("credit_sales", creditSalesSchema);

module.exports = { CreditSalesModel }