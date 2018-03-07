var http = require("http");
var message = require("./message.js");

http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});
    res.end(message.send());
}).listen(3000);

console.log("Xôu");