const { markAllAsCompleted } = require('../../services/todo-list');

function _markAllAsCompleted (req,res){
  	markAllAsCompleted()
  	res.send(`Tasks all Done`)
}

module.exports= _markAllAsCompleted