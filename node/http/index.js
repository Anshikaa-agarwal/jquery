const http = require('http')

const myServer = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.write('hello world')
    res.end()
})

myServer.listen(8000, () => console.log("server started"));