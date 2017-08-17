const Task = require('../../../models/Task')

function updateTask (req, res) {
  const { id } = req.params
  const { done, title } = req.body

  if (done) {
    Task
      .findByIdAndUpdate(id, {done:true})
      .then(task => res.send(task))
  }

  if (title) {
    Task
      .findByIdAndUpdate(id, {title:title})
      .then(task => res.send(task))
  }

}

module.exports = updateTask
