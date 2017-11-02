const {getAllTasksCompleted}= require ('../../services/todo-list.js')

function showListCompleted (req, res) {
  let allTasksCompleted = getAllTasksCompleted()
  res.render('completed', {allTasksCompleted})
}

module.exports = showListCompleted