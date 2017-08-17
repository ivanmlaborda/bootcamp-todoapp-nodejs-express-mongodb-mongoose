const Task = require('../../../models/Task')

function addTask (req, res) {
  console.log('algo')
  const { title } = req.body
  const task = new Task({ title, done:'false' })

  task.save()
    // .then(() => res.send(`Added task 👉 ${title}`))
    .then(() => res.redirect('/tasks'))

  }


module.exports = addTask
