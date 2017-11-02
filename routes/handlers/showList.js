const {getPendingTasks}= require ('../../services/todo-list.js')

function showList (req, res) {
  let allTasksGet = getPendingTasks()
  res.render('index', {allTasksGet})
}

module.exports = showList