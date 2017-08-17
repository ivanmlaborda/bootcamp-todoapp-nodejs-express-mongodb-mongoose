const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

const PORT = 3002
const URL_DB = 'mongodb://localhost:27017/todo'

const routesTasks = require('./routes/tasks')
const routesTask = require('./routes/task')

mongoose.promise = global.Promise
mongoose.connect(URL_DB, {useMongoClient: true})

app.set('view engine', 'pug')

app.use(express.static(path.join(process.cwd(), 'public')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/tasks', routesTasks)
app.use('/task', routesTask)

app.listen(PORT)
console.log(`Listening on PORT ${PORT}`)
