const Group = require("../models/Group.model");

module.exports.groupController = {
    postGroup:async (req, res) => {
    try {
        const { name, putOrderGroup, weekOfGroup, endStudy } = req.body
        const result = await Group.create({
           name: name,
           putOrderGroup: putOrderGroup,
           weekOfGroup: weekOfGroup,
           endStudy: endStudy
    }) 
    res.json(result)   
    } catch(e) {
    res.json(e)
    } 
    },
     
    deleteByIdGroup:async (req, res) => {
        try {
        const result = await Group.findByIdAndDelete(req.params.id) 
        res.json(result)   
        } catch(e) {
        res.json(e)
        } 
        },

    getAllGroup:async (req, res) => {
        try {
        const result = await Group.find().populate({path: "studentId", select: "name surname status"}) 
        res.json(result)   
        } catch(e) {
        res.json(e)
        } 
        },

    getWeekGroup:async (req, res) => {
        try {
        const result = await Group.findOne({weekOfGroup: req.params.week})
        res.json(result)   
        } catch(e) {
        res.json(e)
        } 
        },

        addGroupStudy: async(req, res) => {
            try {
                const data = await Group.find({endStudy: req.body.endStudy})
                return res.json(data)
            } catch (e) {
            res.json(e)
            }
        },
     
        addGroupStudents: async(req, res) => {
            try {
            const data = await Group.findByIdAndUpdate(req.params.id,{$push: {studentId: req.body.studentId}})
              res.json(data)
            } catch (e) {
            res.json(e)
            }
        },
}