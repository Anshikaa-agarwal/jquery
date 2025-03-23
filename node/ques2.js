// Create a Node.js file that opens the requested file and returns the content to the client. If anything goes wrong, throw a 404 error:
const fs = require('fs')
const url = require('url')
const http = require('http')

const myServer = http.createServer((req, res) => {
    var q = url.parse(req.url, true);
    var filename = '.' + q.pathname;

    fs.readFile(filename, (err, data) => {
        if(err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('404 not found');
        }

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })
})

myServer.listen(8000, () => console.log("Starting server"))