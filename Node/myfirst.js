var http = require("http");

http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});
    res.end("<h1 style='color: magenta;'>Luiza Bomfim</h1>");
}).listen(3000);

console.log("Xôu");