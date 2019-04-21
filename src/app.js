const express = require('express')
const bodyParser = require('body-parser')

const animal = require('./routes/animal.route')
const app = express()

const mongoose = require('mongoose')

let dev_db_url = 'mongodb+srv://jashment:Bowzerdog1!@cluster0-dh4uw.mongodb.net/test?retryWrites=true'
let mongoDB = process.env.MONGODB_URI || dev_db_url
mongoose.connect(mongoDB)
mongoose.Promise = global.Promise
let db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use('/animals', animal)
app.use('/', animal)

const port =(process.env.PORT || 5000)

app.listen(port, () => {
    console.log(`Server is up and running on ${port}`)
})