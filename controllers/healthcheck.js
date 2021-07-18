const healthyRouter = require('express').Router()
const constants = require('../utils/constants');

healthyRouter.get('/',(req, res) => {
    try {
        res.status(200).contentType('application/json').send(constants.PONG_MESSAGE);
    }catch(exp){
        res.status(400).send(exp);
    }
})

module.exports = healthyRouter