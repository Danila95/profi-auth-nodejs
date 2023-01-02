const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter')
const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())
app.use('/auth', authRouter)

const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://admin:112112@cluster0.skpvqu7.mongodb.net/auth-rules?retryWrites=true&w=majority`)
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()