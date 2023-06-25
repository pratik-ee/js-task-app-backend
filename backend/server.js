const express=require('express');
const connectDB=require('./configs/connectDB');
const dotenv=require("dotenv").config();
const taskRoute=require('./routes/taskRoute');
const app=express();
const mongoose=require('mongoose');
const Task = require('./model/taskModel');
const coars=require('cors');
app.get("/",(req,res)=>{
res.send("home");
})
app.use(express.json());//middleware
app.use(express.urlencoded({extended:false}));
app.use(coars());
app.use(taskRoute);
//get data

const port=process.env.PORT ||5000;
mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(port,()=>{
            console.log(`the app is listening to ${port}`);
        })
    })
    .catch((err)=>{console.log(err);})

