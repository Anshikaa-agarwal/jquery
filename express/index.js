const express = require('express')
const app = express()
const port = 3001

//using json
app.use(express.json())

let products = []

function generateID() {
    return products.length+1;
}

//home page
app.get('/', (req, res) => {
    res.send("Home page. Navigate to add, view, update and delete inventory.");
})

//add a new product (post)
app.post('/products', (req, res) => {
    const {name, value, stock} = req.body;

    if(!name || !value || !stock) {
        return res.status(400).json({error: "Enter name, value and current inventory in stock"});
    }

    const newProduct = {id: generateID(), name, value, stock};
    products.push(newProduct);
    res.status(200).json(newProduct);
})

//view inventory
app.get('/products', (req, res) => {
    res.json(products);
})

//update inventory (put)
app.put('/products', (req, res) => {
    const { id } = req.params;
    const { name, value, stock } = req.body;

    const product = products.find(p => p.id == id);
    if(!product) {
        return res.status(404).json({error: "Product not found."});
    }

    if(!name || !value || !stock) {
        return res.status(400).json({error: "Enter name, value and stock"});
    }

    product.name = name;
    product.value = value;
    product.stock = stock;

    res.json(product);
})

//delete inventory (delete)
app.delete('/products/:id', (req, res) => {
    const {id} = req.params;
    const index = products.findIndex(p => p.id == id);

    if(!index) {
        return res.status(404).json({error: "Product not found."});
    }
    
    products.splice(index, 1);
    res.json(products)
})

//run port
app.listen(port, () => {
    console.log("Server listening...");
})