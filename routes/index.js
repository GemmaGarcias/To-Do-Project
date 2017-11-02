const express = require('express')

const showList = require('./handlers/showList')
const showListCompleted = require('./handlers/showListCompleted')
const addNewTask = require('./handlers/addNewTask')
const removeDoneTask = require('./handlers/removeDoneTask')
const markAsCompleted = require('./handlers/markAsCompleted')
const markAllAsCompleted = require('./handlers/markAllAsCompleted')
const removeAllTasks = require('./handlers/removeAllTasks')
//const editTaskNew = require('./handlers/editTaskNew')

const router = express.Router();

router.get('/', showList)
router.get ('/completed', showListCompleted)
router.post('/new', addNewTask)
router.route('/task/:id')
	.delete(removeDoneTask)
	.put(markAsCompleted)
router.put('/tasks-done', markAllAsCompleted)
router.delete('/tasks-delete', removeAllTasks)
//router.put('/edit/:id', editTaskNew)

module.exports = router