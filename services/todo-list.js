var allTasks = []
let counter = 0

function setTasks( sessionTasks ) {
  allTasks = sessionTasks
}

function getPendingTasks() {
	return allTasks.filter(tasks => tasks.completed === false)
}

function getAllTasksCompleted() {
	return allTasks.filter(tasks => tasks.completed === true)
}

function addTask(post) {
	allTasks.push(post)
}

function markAsDone (id) {
	allTasks= allTasks.map(task=>{
		if(task.id === id) {
			task.completed = true
		}
		return task
	})
}

function removeTask(id) {
	let counter = 0
	allTasks.forEach(function (task) {
		if(task.id === id) {
			allTasks.splice(counter, 1)
		} 
		counter++
	})
}

function removeAllTasks() {
	
	console.log(allTasks.length)
	for(let i = 0;i<=allTasks.length;i++){
		console.log(allTasks.length)
		if(!allTasks[i].completed) {
			allTasks.splice(i, 1)
		} 
	}
}

function markAllAsCompleted(){
	allTasks= allTasks.map(task=>{
		task.completed = true 
		return task
	})
}
// function editTask(id, name, completed) {
//   allTasks = allTasks.map( post => {
//     if (post.id == +id) {
//       post.name = name
//       post.completed = false
//     }
//     return post
//   })
// }

module.exports = { getPendingTasks, getAllTasksCompleted, addTask, removeTask, markAsDone, markAllAsCompleted, removeAllTasks, setTasks }