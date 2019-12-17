var http = require('http');
var port = 91;

/**
 * var app = require('../app');
 * var server = http.createServer(app);
 */

var data = { key: 'hello', value: 'world'};

var server = http.createServer(function(request,response){
    response.writeHead(200,{
        'content-type': 'application/json',
        "Access-Control-Allow-Origin":"*"
    });
    // response.write('Hello World -- 0');
    response.end(JSON.stringify(data));
});

server.listen(port);
console.log('Server running on port 91');