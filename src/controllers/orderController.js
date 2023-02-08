let orderModel=require("../Models/orderModel")
let costumerModel=require("../Models/costumerModel")
let {isValidObjectId}=require("mongoose")

const createOrder= async (req,res)=>{
    let data= req.body;
    let {productName,productPrice,costumerId}=data
    if(!productName) return res.status(400).send({status:false, message:"please provide product name"})
    if(!validName(productName)) return res.status(400).send({status:false, message:"Please enter valid productName"})
    if(!productPrice) return res.status(400).send({status:false,message:"please provide product price"})
    if(!isValidObjectId(costumerId)) return res.status(400).send({status:false, message:"invalid costumer id"})
    
    let costumer= await costumerModel.findOneAndUpdate({_id:costumerId},{$inc:{totalOrders:1}},{new:true})
    if(!costumer) return res.status(404).send({status:false, message:"costumer doesn't exist"})

    let createdorder= await orderModel.create(data)

    if(costumer.totalOrders>9 && costumer.totalOrders<=19){
        let discntOfgld=productPrice*0.10
        await costumerModel.findOneAndUpdate({_id:costumerId},{category:"gold",cashBackAmount:discntOfgld},{new:true})
        
    }
    if(costumer.totalOrders>19){
        let discntOfpltnm=productPrice*0.20
        await costumerModel.findOneAndUpdate({_id:costumerId},{category:"platinum",cashBackAmount:discntOfpltnm},{new:true})
        
    }
    return res.status(201).send({status:false, message:"Order placed succesfully", data:createdorder})
}

module.exports={createOrder}