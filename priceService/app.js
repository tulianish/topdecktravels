const express=require('express');
 
const app=express();
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const cors=require('cors');
app.use((req, res, next) => { 
	res.header('Access-Control-Allow-Origin', '*');
	next();});
	app.use(cors());



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const ticketRoute=require('./Routes/getPrice');

app.use('/booking',ticketRoute);

app.get('/',(req,res)=>{
    res.send('WE ARE ON THE GET PRICE PAGE');
});

mongoose.connect('mongodb://3.88.249.85/TourismCanada', {useNewUrlParser: true},
	()=>console.log('DB connected'));

app.listen(3003);

