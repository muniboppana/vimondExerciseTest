const versionRouter  = require('express').Router()
const constants = require('../utils/constants');
versionRouter.get('',  (req, res) => {
    try{
        res.status(200).send(constants.NODE_VERSION_MSG + process.version);
    }catch (exp){
        res.status(400).send(exp.json());
    }
})

module.exports = versionRouter