const express = require('express');
const bodyparser = require('body-parser');
const app = express()
const  healthyRouter = require('./controllers/healthcheck')
const  versionRouter = require('./controllers/version')
const  imageRouter = require('./controllers/image')
const userPostRouter = require('./controllers/userpost')
const newTodoRouter = require('./controllers/newtodo')

app.use(bodyparser.json());
app.use('/ping',healthyRouter)
app.use('/version',versionRouter)
app.use('/images', imageRouter)
app.use('/', userPostRouter)
app.use('/todo',newTodoRouter)


app.get("*",function(req,res){
    res.send("Not Found ", 404);
})

app.post("*",function(req,res){
    res.send("Not Found ", 404);
})
module.exports = app




