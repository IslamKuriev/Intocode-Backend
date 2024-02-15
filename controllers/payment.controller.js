const Payment = require("../models/Payment.model")
     
module.exports.paymentController = {
    postPayment: async (req, res) => {
        try {
        const { status } = req.body
        const result = await Payment.create({
        status: status
        })
        res.json(result)
      } catch(e) {
       res.json(e)
     }
    },

    deleteByIdPayment: async (req, res) => {
      try {
      const result = await Payment.findByIdAndDelete(req.params.id)
      res.json(result)
    } catch(e) {
     res.json(e)
   }
  },

  getAllPayment: async (req, res) => {
    try {
    const result = await Payment.find()
    res.json(result)
  } catch(e) {
   res.json(e)
 }
 },

 updatePayment: async (req, res) => {
  try {
    const result = await Payment.findByIdAndUpdate(req.params.id, {
      status: req.body.status
    });
     res.json(result);
  } catch (e) {
      res.json(e)
  }
},
} 