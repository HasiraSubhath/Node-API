const { json } = require('express')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Product = require('./models/productModel') //import pmodel
app.use(express.json())

//Route

app.get('/',(req, res) => {
    res.send('Hello this is NODE API')
})

app.get('/blog',(req, res) => {
    res.send('hi this is 2nd page')
})

//Get all data
app.get('/products', async(req, res) =>{
    try {
        const products = await Product.find({});
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Get data by id
app.get('/products/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const products = await Product.findById(id);
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//send data DB
app.post('/Products', async(req, res) =>{
   try {
        const product = await Product.create(req.body)
        res.status(200).json(product);

   } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
   }
    // console.log(req.body);
    //res.send(req.body)
})

//Update
app.put('/products/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
      //no products
        if(!product){
            return res.status(404).json({message: 'cannot find any products with id ${id}'})
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(product);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

mongoose.set("strictQuery", false)
mongoose.connect('mongodb+srv://admin:admin@project1api.snidftc.mongodb.net/NODE-API?retryWrites=true&w=majority')
.then (() =>{
    console.log('connected to MongoDB')
    app.listen(3000, ()=> {
        console.log('Node API is running in port 3000')
    });
    
}).catch((error) => {
    console.log(error)
})  
