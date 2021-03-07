const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const compression = require('compression')
const cors = require('cors')

const db = require("./models");
db.sequelize.sync();

var app = express()

// Middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(helmet())

// Compression
app.use(compression())

// Body parser
app.use(bodyParser.json())
// Routes Setup
app.use('/api/user', require('./routes/user'))
app.use('/api/gender', require('./routes/gender'))

// catch 404 and forward to error handler
app.use(function (req, res) {
  res.status(404).send()
})

app.listen(3000)
module.exports = app