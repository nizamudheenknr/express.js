const express = require("express")
const app = express()
const port = 3000;
const path =require('path')

app.get('/',(req,res)=>{
   res.send("hello world from express")


})


app.listen(port,()=>{
    console.log(`server started : ${port}`);
})