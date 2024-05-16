const http = require('http')

const hostname = '127.0.0.1';

const port = 3000;

// creating a server

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end('Hello World\n')
    } else if (req.url === '/about') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end('What the  World\n')
    } else {
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/plain')
        res.end('404 Not found')
    }
        
    
});

server.listen(port, hostname, () => {
    console.log(`server is listening at http://${hostname}:${port}`);
});
