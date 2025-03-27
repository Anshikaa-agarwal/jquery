const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

let Products = []

//home page
app.get('/', (req, res) => {
    res.send("Home page here.");
})

function generateID() {
    return Products.length+1;
}

//add new product
app.post('/products', (req, res) => {
    const {name, price, stock} = req.body;

    if(!name || !price || !stock) {
        return res.status(400).json({error: "Enter name, price and stock."});
    }

    const product = {id: generateID(), name, price, stock};
    Products.push(product)
    res.status(200).json(Products);
})

//view items
app.get('/products', (req, res) => {
    res.json(Products)
})

//update items
app.put('/products', (req, res) => {
    const {id} = req.params;
    const {name, price, stock} = req.body;

    const product = Products.find(p => p.id==id);
    if(!product) {
        return res.status(404).json({error: "No such product found."});
    }

    if(!name || !price || !stock) {
        return res.status(400).json({error: "Enter name, price and stock."});
    }

    product.name = name;
    product.price = price;
    product.stock = stock;

    res.status(200).json(product);
})

//delete
app.delete('/products/:id', (req, res) => {
    const {id} = req.params;

    const index = Products.findIndex(p => p.id == id);
    if(index === -1) {
        return res.status(404).json({error: "Element not found."});
    } 

    Products.splice(index, 1);
    res.status(200).json(Products);
})

//host
app.listen(port, (req, res) => {
    console.log("Server Listening")
})