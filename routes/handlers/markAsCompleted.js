const {markAsDone} = require('../../services/todo-list')

function markAsCompleted (req,res){
	const { id } = req.params
	console.log('-------------------')
	console.log(req.session, 'handler put to done')
	console.log('-------------------')
  	markAsDone(id)
  	res.send(`Task num: ${id} completed`)
}

module.exports= markAsCompleted