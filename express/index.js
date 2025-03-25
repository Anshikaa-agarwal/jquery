const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send("helloo world");
    res.statusCode(200)
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'complex.html'))
})

app.get('/blog', (req, res) => {
    res.send("blogs page here!")
})
app.get('/blog/:slug', (req,res) => {
    res.send(`Heyyy ${req.params.slug}`)
})

app.listen(port, () => {
    console.log("listening")
})