const Task = require('../../../models/Task')

function getTasks (req, res) {

  Task.find({'done': false})
    .then(tasks => res.render('pages/tasks', { tasks }))
}

module.exports = getTasks
