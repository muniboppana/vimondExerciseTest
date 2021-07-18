const verifyRouter = require('express').Router()
verifyRouter.get('/ping',(req, res) => {
    res.send("pong")
})

verifyRouter.get('/version',(req, res) => {
    res.send("current node verison is "+ process.version);
})
module.exports = verifyRouter