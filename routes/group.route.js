const { Router } = require('express')
const { groupController } = require('../controllers/group.controllers')
const router = Router()

router.post('/group', groupController.postGroup)
router.delete('/group/delete/:id', groupController.deleteByIdGroup)
router.get('/group', groupController.getAllGroup)
router.get('/group/week/:id', groupController.getWeekGroup)
router.patch('/group/study', groupController.addGroupStudy)
router.patch('/group/students/:id', groupController.addGroupStudents)

module.exports = router