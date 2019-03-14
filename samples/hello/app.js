var hello = require('./hello.js');
var http = require("http");

http.createServer(function(req,res){
    res.end("Hello NOde");
}).listen(3001);

console.log("dsfdsf");
console.log(hello.sayHelloInEnglish());
console.log(hello.sayHelloInSpanish());
console.log(hello.sayHelloInTelugu());
