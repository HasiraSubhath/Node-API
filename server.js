const express = require('express')
const app = express()
const mongoose = require('mongoose')

//Route

app.get('/',(req, res) => {
    res.send('Hello this is NODE API')
})

app.get('/blog',(req, res) => {
    res.send('hi this is 2nd page')
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
