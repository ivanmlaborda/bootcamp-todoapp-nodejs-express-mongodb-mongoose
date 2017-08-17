const Task = require('../../../models/Task')

function getTasks (req, res) {

  Task.find()
    .then(tasks => res.render('pages/tasks', { tasks }))
}

module.exports = getTasks
