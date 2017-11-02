const { removeTask } = require('../../services/todo-list');

function removeDoneTask (req,res){
	console.log('entraaaa')
	const { id } = req.params
  	removeTask(id)
  	res.send(`removed post w/ id ${id}...`)
}

module.exports= removeDoneTask