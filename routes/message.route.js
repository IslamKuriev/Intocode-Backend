const { Router } = require('express')
const { messageController } = require('../controllers/message.controller')
const router = Router()

router.post('/message', messageController.postMessage)
router.delete('/message/delete/:id', messageController.deleteByIdMessage)
router.get('/message', messageController.getAllMessage)
router.patch('/message/update/:id', messageController.updateMessage)

module.exports = router