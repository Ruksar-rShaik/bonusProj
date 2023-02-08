const mongoose=require("mongoose")

const orderSchema =new mongoose.Schema({
    costumerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref : "costumer",
        required:true
    },
    ProductName:{
        type:String
    },
    productPrice:{
        type:Number
    },
    
},{ timestamps: true })

module.exports = mongoose.model('order', orderSchema)