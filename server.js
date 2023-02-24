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

app.post('/Product', async(req, res) =>{
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
