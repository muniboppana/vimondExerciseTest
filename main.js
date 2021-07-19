const http = require("http")
const config = require('./utils/config')
const app = require('./server')


const server = http.createServer(app);
server.listen(config.PORT, () => {
    var port = server.address().port
    console.log('node started with port number ::: '+ config.PORT  + port)

})