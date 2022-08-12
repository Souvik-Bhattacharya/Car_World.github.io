const fs = require('fs');
const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const { stringify } = require('querystring');
const url = "mongodb+srv://Souvik-Bhattacharya:souvik03@cluster0.rbthm9k.mongodb.net/carShowroom?retryWrites=true&w=majority";
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true});
const port = 80;

var carSchema = new mongoose.Schema({
    name: 'string',
    age: 'string',
    gender: 'string',
    elegibility: 'string',
    address: 'string',
    email: 'string',
    phone: 'string',
    date: 'string',
    model: 'string',
    color: 'string'
})
var info = mongoose.model('info',carSchema);

app.use('/static',express.static('static'));
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());

app.get('/',(req,res)=>{
    res.status(200).render('index.pug');
});

app.get('/about',(req,res)=>{
    res.status(200).render('about.pug');
});

app.get('/services',(req,res)=>{
    res.status(200).render('services.pug');
});

app.get('/contact',(req,res)=>{
    res.status(200).render('contact.pug');
});

app.get('/Terms',(req,res)=>{
    res.send("We have no Terms & Conditions!")
});

app.get('/Privacy',(req,res)=>{
    res.send("Your provided data is secured!")
});

app.get('/Return',(req,res)=>{
    res.send("We have no return policies!")
});

app.post('/contact',(req,res)=>{
    /*
    let name = req.body.name;
    let age = req.body.age;
    let gender = req.body.gender;
    let ele = req.body.elegibility;
    let address = req.body.address;
    let email = req.body.email;
    let phone = req.body.phone;
    let date = req.body.date;
    let model = req.body.model;
    let color = req.body.color;
    let info = `${name},${age},${gender},${ele},${address},${email},${phone},${date},${model},${color}`;
    fs.writeFileSync('info.txt',info);
    */
    var Data = new info(req.body);
    Data.save().then(() => {
        res.status(200).render('contact.pug')
    }).catch(() => {
        res.status(400).send("Data was not stored")
    });
});

app.listen(process.env.PORT,()=>{
    console.log(`started on port ${port}`);
});