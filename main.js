const http = require("http")
const config = require('./utils/config')
const app = require('./server')


const server = http.createServer(app);
server.listen(config.PORT, () => {
    console.log('node started with port number'+ config.PORT)

})