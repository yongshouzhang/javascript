var http =require('http');
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('hello node.js\n');
}).listen(8080);
console.log("server running at 8080");