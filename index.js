const express = require('express');
const bodyParser = require('body-parser')
const moment = require('moment')
const session = require('express-session')

const app = express();

const routes = require('./routes')
const { setTasks } = require('./services/todo-list')

app.set('view engine', 'pug');
app.use(express.static('public'));
app.locals.moment = moment

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(session({
  secret: 'sssss',
  resave: false,
  saveUninitialized: true
}))

app.use( (req,res,next) => {
  req.session.allTasks = req.session.allTasks || []
  setTasks(req.session.allTasks)
  next()
})


app.use( routes )

app.listen(3000);
console.log('Listening on PORT 3000...')