const userPostRouter = require('express').Router();
const routes =  require('../utils/routeurl');
const fetch = require('node-fetch');
const NodeCache = require('node-cache');
const myCache = new NodeCache();

userPostRouter.get('/Nicholas',async (req, res) => {
    try {
        const usersResponse = await fetch(routes.FETCH_USERS_URI);
        const userList = await usersResponse.json();
        const resultUser = userList.filter(user=>user.name.toLowerCase().includes('Nicholas'.toLowerCase()))[0];
        const postResponse = await fetch(routes.FETCH_USER_POSTS_URI);
        const postList = await postResponse.json();
        const resultPost =  postList.filter(post=> post.userId === resultUser.id)
        res.status(200).send({
            'user' : resultUser,
            'posts' : resultPost
        }   );
    } catch (e) {
        console.log(e);
        res.send(e);
    }

})

userPostRouter.get('/Romaguera',async (req, res) => {
    try {
        if(myCache.has('USER_POST_COMPANY')){
            res.send(myCache.get('USER_POST_COMPANY'));

        } else {
            const usersResponse = await fetch(routes.FETCH_USERS_URI);
            const userList = await usersResponse.json();
            let posts = [];
            const resultUsers = userList.filter(user=>user.company.name.toLowerCase().includes('Romaguera'.toLowerCase()));
            const postResponse = await fetch(routes.FETCH_USER_POSTS_URI);
            const postList = await postResponse.json();
            resultUsers.forEach(user => {
                    const resultPosts =  postList.filter(post=> post.userId === user.id);
                    posts.push(resultPosts);
                }
            )
            myCache.set('USER_POST_COMPANY',posts,10);
            res.status(200).send(posts);
        }

    } catch (e) {
        res.status(400).send(e);
        console.log(e);
    }

})

//sorting orders users based on the cities.
userPostRouter.get('/sorted-users', async (req, resp)=>{

    try {
        if(myCache.has('SORTED_USERS')){
            resp.send(myCache.get('SORTED_USERS'));
        } else {
            const usersResponse= await fetch(routes.FETCH_USERS_URI) ;
            const resultUsers = await usersResponse.json();
            const sortedCityUsers = resultUsers.sort((a ,b) => (a.address.city > b.address.city) ? 1
                : ((b.address.city > a.address.city) ? -1 : 0) );
            const resultSortedUsers = sortedCityUsers.filter(user=> user.website.includes('org') || user.website.includes('net') || user.website.includes('com'));
            myCache.set('SORTED_USERS',resultSortedUsers,10);
            resp.status(200).send(resultSortedUsers);
        }

    }catch (exp){
        resp.status(400).send(exp);
    }

})

module.exports = userPostRouter;