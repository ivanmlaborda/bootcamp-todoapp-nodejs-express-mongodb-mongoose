const Task = require('../../../models/Task')

function getCompletedTasks (req, res) {

  Task.find({done: true})
    .then(doneTasks => {
        res.render('pages/completed', { doneTasks })

    })
}

module.exports = getCompletedTasks
