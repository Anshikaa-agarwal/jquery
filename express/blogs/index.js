const express = require('express')
const path = require('path')
const app = express()
const port = 3001

app.use(express.static(path.join(__dirname, 'static')))

app.get('/', (req, res) => {
    res.send("Greetings everyone!");
})

app.get('/:name', (req, res) => {
    res.send("Greetings, " + req.params.name);
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})