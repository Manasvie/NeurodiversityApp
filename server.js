const express = require('express')
const mongoose = require('mongoose')
const Product = require('./neurodiversity-app/src/models/storyModel');
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes

app.get('/',(req, res) => {
    res.send('Hello Node API')
})

app.get('/blog',(req, res) => {
    res.send('Hello Blog! My name is Manasvi')
})



// Save a product
app.post('/story', async(req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } 
    catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})


mongoose.set("strictQuery", false);
mongoose
.connect('mongodb+srv://manasvi373bagherwal:Weo2OQV6Ydcd4Me7@cluster0.iku2eh6.mongodb.net/')
.then(() => {
    console.log("Connected")
    app.listen(8080, ()=> {
        console.log("Node API app is running on port 8080")
    });
})
.catch(() =>
 {
    console.log(error)
})