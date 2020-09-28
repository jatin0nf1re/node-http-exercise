const http = require('http');

var hostname = "localhost";
var port = 3000;

const server = http.createServer((req,res) => {
    console.log(req.headers);

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end('<html><body><h1>Hey There</h1></body></html>');

})

server.listen(port, hostname, () => {
    console.log(`Server has started on http://${hostname}:${port}`);
})

