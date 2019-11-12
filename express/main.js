const express =require("express")
const products = require("./products")
const product2 =require("./product2")
const shopcarlist = require("./shopcar")
const app =express()
// app.use("/",(req,res)=>{
//     res.end("hello express!")
// })
app.use("/product",products)
app.use("/product2",product2)
app.use("/shopcarlist",shopcarlist)

app.listen(3005,()=>{
    console.log("server is listening......")
})

