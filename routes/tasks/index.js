const express = require('express')
const router = express.Router()

const addTask = require('./handlers/addTask')
const getTasks = require('./handlers/getTasks')
const getCompletedTasks = require('./handlers/getCompletedTasks')
const updateAllTasks = require('./handlers/updateAllTasks')

router.post('/', addTask)
router.get('/', getTasks)
router.get('/completed/', getCompletedTasks)
router.put('/', updateAllTasks)

module.exports = router
