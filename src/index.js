const express=require("express")
const app=express()
const mongoose=require("mongoose")
const route=require("./routes/route")

app.use(express.json())

mongoose.connect("mongodb+srv://Ruksar:1ststep@ruksar.cg402ym.mongodb.net/test/orderDB",{useNewUrlParser:true})
.then(()=>console.log("Mongoose Connected"))
.catch((err)=>console.log(err))

app.use('/',route)

app.listen(3000,function(){
    console.log("server online at port 3000")
})