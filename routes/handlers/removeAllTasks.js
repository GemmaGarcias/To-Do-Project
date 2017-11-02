const { removeAllTasks } = require('../../services/todo-list');

function _removeAllTasks(req,res){
	removeAllTasks()
	res.send('All tasks removed')
}

module.exports= _removeAllTasks