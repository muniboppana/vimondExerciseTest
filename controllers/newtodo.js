const newTodoRouter = require('express').Router();
const fetch = require('node-fetch');
const {response} = require("express");
const routes =  require('../utils/routeurl');

newTodoRouter.post('/',async(req, res) => {
    const requestBody = req.body;

    try {
         const todoResponse = await fetch(routes.CREATE_TODO_URI, {
            method: 'POST',
            body: requestBody,
            headers: {"ContentType": "application/json"}

        });
        const todo = await todoResponse.json();
        res.status(200).send(todo);

    }catch(exp) {
        res.status(400).send(exp);
        console.log(exp);
    }



})



module.exports = newTodoRouter;