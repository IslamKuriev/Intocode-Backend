const { Router } = require('express')
const { studentController } = require('../controllers/student.controller')
const router = Router()

router.post('/student', studentController.postStudent)
router.get('/student', studentController.getAllStudent)
router.delete('/student/delete', studentController.deleteByIdStudent)
router.patch('/student/update/:id', studentController.updateByIdStudent)
router.get('/student/group/:id', studentController.getGroupStudent)
router.get('/student/message/:id', studentController.getMessageStudent)
router.get('/student/payment/:id', studentController.getPaymentStudent)
router.get('/student/status', studentController.getStatusStudent)
router.patch('/student/message/:id', studentController.addMessageForStudent)
router.patch('/student/group/:id', studentController.addGroupForStudent)
router.get('/student/offer/:id', studentController.getOfferForStudentByGroup)

module.exports = router


