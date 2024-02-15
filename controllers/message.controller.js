const Message = require("../models/Message.model")

module.exports.messageController = {
    postMessage: async (req, res) => {
        try {
        const { text } = req.body
        const result = await Message.create({
        text: text
        })
        res.json(result)
      } catch(e) {
       res.json(e)
     }
    },

    deleteByIdMessage: async (req, res) => {
      try {
      const result = await Message.findByIdAndDelete(req.params.id)
      res.json(result)
    } catch(e) {
     res.json(e)
   }
  },

  getAllMessage: async (req, res) => {
    try {
    const result = await Message.find()
    res.json(result)
  } catch(e) {
   res.json(e)
 }
 },

 updateMessage: async (req, res) => {
  try {
    const result = await Message.findByIdAndUpdate(req.params.id, {
      text: req.body.text
    });
     res.json(result);
  } catch (e) {
      res.json(e)
  }
},
} 