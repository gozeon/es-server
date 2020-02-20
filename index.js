require('dotenv').config()

const bodyParser = require('body-parser')
const bearerToken = require('express-bearer-token')
const express = require('express')
const app = express()

app.use(require('morgan')('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bearerToken())

// console.log(require('./routers'))
app.use('/es', require('./routers'))

app.listen(process.env.PORT)
