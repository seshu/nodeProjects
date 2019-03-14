var http = require("http");
 
http.createServer(function (req, res) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
 
   res.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   res.end('Hello World gfgfdg\n');
}).listen(3002);
 
// Console will print the message
console.log("server is running on http://127.0.0.1:3000/")