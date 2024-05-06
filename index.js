const express = require("express")
const app = express()
const port = 3000;
const path =require('path')



// app.get("/",(req,res)=>{
//     res.download(path.join(__dirname,"sample.txt"))
// })

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"home.html"))
})
// app.get('/',(req,res)=>{
//     res.send("<h1>Hello world</h1>")
//  })


// app.get('/product',(req,res)=>{
//    res.send("hello world from express world")
// })

// app.post('/product',(req,res)=>{
//     res.send("product created")
// })

// app.put('/product',(req,res)=>{
//     res.send("product updated")
// })

// app.delete('/product',(req,res)=>{
//     res.send("product delete")
// })


app.listen(port,()=>{
    console.log(`server started : ${port}`);
})