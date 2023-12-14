// create web server
// run server: node comment.js
// open browser: http://localhost:8080
// press ctrl+c to stop server
//==============================================

var http = require('http');
var url = require('url');

var server = http.createServer(function (request, response) {
    var path = url.parse(request.url).pathname;
    console.log(path);
    switch (path) {
        case '/':
            response.writeHead(200, { 'Content-Type': 'text/plain' });
            response.write('Hello World');
            response.end();
            break;
        case '/about':
            response.writeHead(200, { 'Content-Type': 'text/plain' });
            response.write('About');
            response.end();
            break;
        default:
            response.writeHead(404);
            response.write("opps this doesn't exist - 404");
            response.end();
            break;
    }
});

server.listen(8080);
console.log('Server is running at http://localhost:8080');