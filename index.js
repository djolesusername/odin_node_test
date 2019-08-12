var http = require("http");
var fs = require("fs");


var server = http.createServer(function (req, res) {
    console.log('Request was made' + req.url);
    if (req.url === '/') {
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    else if (req.url === '/contact-me') {
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.createReadStream(__dirname + '/contact-me.html').pipe(res);
    }
    else if (req.url === '/about') {
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.createReadStream(__dirname + '/about.html').pipe(res);
    }
    else {
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.createReadStream(__dirname + '/404.html').pipe(res);

    }



    //var myReadStream = 
    //myReadStream.pipe(res);
    //res.end();
})


server.listen(8080);
console.log("Listening 8080");