const imageRouter = require('express').Router();
const config = require("../utils/config");
const fetch = require('node-fetch');
const NodeCache = require('node-cache');
const routes =  require('../utils/routeurl');
const myCache = new NodeCache();
const { check, validationResult } = require('express-validator');

imageRouter.get('', [
                                    check('size' ).optional().isNumeric(),
                                    check('offset').optional().isNumeric()
],
                                   async (req, res) =>
{

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    }
    const size   = req.query.size;
    console.log(size);

    try{
        if(myCache.has('IMAGE_DATA_KEY')){
            res.send(myCache.get('IMAGE_DATA_KEY'));
        } else {
            const fetchResp = await fetch(routes.GET_PHOTOS_URI);
            const photos = await fetchResp.json();
            const querySize =  req.query.size ? parseInt(req.query.size) : 0;
            const result = querySize === 0 ? photos : req.query.offset ?
            photos.slice(((req.query.offset * querySize)), ((req.query.offset * querySize) + querySize)) :
            photos.slice(0,querySize);
            myCache.set('IMAGE_DATA_KEY',result,10);
            res.status(200).contentType('application/json').send(result);

        }

    }catch (e) {
        console.log(e);
        res.send(e);

    }
});


module.exports = imageRouter
