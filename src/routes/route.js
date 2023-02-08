const express =require("express")
const router= express.Router()
costumerController=require("../controllers/costumerController")
orderController= require("../controllers/orderController")

router.post("/costumer", costumerController.createCostumer)

router.post("/order", orderController.createOrder)

module.exports=router