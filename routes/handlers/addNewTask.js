const {addTask}= require ('../../services/todo-list.js')
const uuid = require('uuid/v1')
let counter = 10;
// Hacemos una función pasándole por el input del pug el name.
// Ese name tendrá el valor que le añadimos y además creará una propiedad con ese valor.
function addNewTask (req, res) {
  console.log(req.body)
  const nameTasks  = req.body.nameTask
  console.log(nameTasks)
  const newTask = {}
  newTask.id = uuid()
  newTask.taskName = nameTasks
  newTask.completed = false
  newTask.createdAt= +new Date(),
  console.log(newTask)
  if (newTask.taskName.length > 0) {
  	addTask (newTask)
	}
  res.redirect('/')
}

module.exports = addNewTask