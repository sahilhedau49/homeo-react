const express=require('express');
const mongoose=require('mongoose')
const app=express();
app.use(express.json());
app.listen(5000,()=>{
    console.log("Server Started")
})
const mongourl="mongodb+srv://samratroykdh:3ksvbp0l2HmpOyCh@cluster0.xhggk6q.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongourl,{
    useNewUrlparser:true
}).then(()=>{console.log("Connected to database");})
.catch((e)=>console.log(e));
app.get("/",(req,res)=>{
    res.json("f")
})

