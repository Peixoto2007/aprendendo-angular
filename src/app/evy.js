var http = requiere("http");

http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("olá...")
}).listen(8080);