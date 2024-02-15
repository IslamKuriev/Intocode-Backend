const Student = require("../models/Student.model")

     
module.exports.studentController = {
    postStudent: async (req, res) => {
        try {
        const { name, surname, age, payment, group, message, status } = req.body
        const result = await Student.create({
            name : name,
            surname : surname,
            age :  age,
            payment : payment,
            group : group, 
            message : message,
            status : status
        })
        res.json(result)
      } catch(e) {
       res.json(e)
     }
    },

    getAllStudent: async (req, res) => {
        try {
        const result = await Student.find().populate('payment').populate('message').populate('group')
        res.json(result)
      } catch(e) {
       res.json(e)
     }
    },

    deleteByIdStudent: async (req, res) => {
      try {
      const result = await Student.findByIdAndDelete(req.params.id)
      res.json(result)
    } catch(e) {
     res.json(e)
   }
  },

  updateByIdStudent: async (req, res) => {
    try {
    const result = await Student.findByIdAndUpdate(req.params.id, req.body)
    res.json(result)
  } catch(e) {
   res.json(e)
 }
 },

  getGroupStudent: async (req, res) => {
    try {
    const result = await Student.find({group: req.params.id})
    res.json(result)
  } catch(e) {
  res.json(e)
  }
  },

  getMessageStudent: async (req, res) => {
    try {
    const result = await Student.findById(req.params.id)
    res.json(result)
  } catch(e) {
  res.json(e)
  }
  },

  getPaymentStudent: async (req, res) => {
    try {
    const result = await Student.find({payment: req.params.id})
    res.json(result)
  } catch(e) {
  res.json(e)
  }
  },

    getStatusStudent: async (req, res) => {
    try {
    const result = await Student.find({status: req.body.status})
    res.json(result)
    } catch(e) {
    res.json(e)
    }
    },

    addMessageForStudent: async (req, res) => {
      const student = await Student.findById(req.params.id)
      try {
      const result = await student.updateOne({
        $addToSet : { message : req.body.message }
      })
      res.json(result)
    } catch(e) {
    res.json(e)
    }
    },

    
    addGroupForStudent: async (req, res) => {
      const student = await Student.findById(req.params.id)
      try {
      const result = await student.findByIdAndUpdate({
        $addToSet : { group : req.body.group }
      })
      res.json(result)
    } catch(e) {
    res.json(e)
    }
    },

    getOfferForStudentByGroup: async (req, res) => {
    const groupOfStudents = await Student.find({group: req.params.id}) 
    const offerStudents = await Student.find({
      group: req.params.id,
      status: 'Offer'
    })
    const percent = (100 / groupOfStudents.length) * offerStudents.length
    res.json(`Процент от оффера: ${percent}`)
    },
}