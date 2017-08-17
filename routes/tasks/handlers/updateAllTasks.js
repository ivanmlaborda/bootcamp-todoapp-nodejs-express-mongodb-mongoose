const Task = require('../../../models/Task')

function updateAllTasks (req, res) {
  console.log('updateAllTasks im in the function')
  Task.updateMany({'done': true})
    .then(tasks => res.render('pages/tasks', { tasks }))

}

module.exports = updateAllTasks
