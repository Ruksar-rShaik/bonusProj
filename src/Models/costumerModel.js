const mongoose=require("mongoose")

const costumerSchema =new mongoose.Schema({
    fname:{
        type:String,
        required:true,
        lowercase:true,
        trim:true
    },
    lname:{
        type:String,
        required:true,
        lowercase:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        trim:true
        },
    password:{
        type:String,
        required:true,
        lowercase:true,
        trim:true
    },
    phone:{
        type:String,
        required:true,
        unique:true, 
        trim:true
     },
     category:{
        type:String,
        default:"regular"
     },
     totalOrders:{
        type:Number,
        default:0
     },
     cashBackAmount:{
      type:Number,
      default:0
     },
     address:{
     street: {
        type:String,
        required:true,
        lowercase:true,
        trim:true
     },
     city: { 
        type:String,
        required:true,
        lowercase:true,
        trim:true
     },
     pincode: { 
        type:Number,
        required:true,
        trim:true
     }
  },
    
},{ timestamps: true })

module.exports = mongoose.model('costumer', costumerSchema)