const { Router } = require('express')
const { paymentController } = require('../controllers/payment.controller')
const router = Router()

router.post('/payment', paymentController.postPayment)
router.delete('/payment/delete/:id', paymentController.deleteByIdPayment)
router.get('/payment', paymentController.getAllPayment)
router.patch('/payment/update/:id', paymentController.updatePayment)

module.exports = router