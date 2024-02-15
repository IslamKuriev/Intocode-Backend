const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())
app.use(require('./routes/group.route'))
app.use(require('./routes/message.route'))
app.use(require('./routes/payment.route'))
app.use(require('./routes/student.route'))

mongoose.connect('mongodb+srv://user:db@cluster0.shtg4u8.mongodb.net/intoCode-website')

.then(()=> {
    console.log('Успешно подключено к Mongodb')
})
.catch((e)=> {
    console.log(e)
})
app.listen(3000, ()=> {
    console.log('Server has been started!')
}) 