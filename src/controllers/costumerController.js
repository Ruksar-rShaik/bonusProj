const costumerModel=require("../Models/costumerModel")

const createCostumer= async(req,res)=>{
    let data=req.body;
    if(Object.keys(data).length==0) return res.status(400).send({status:false,message:"Empty data"})

    let{fname,lname,email,password,phone,address}=data

    if(!fname) return res.status(400).send({status:false, message:"Please enter first name"})
    if(!validName(fname)) return res.status(400).send({status:false, message:"Please enter valid first name"})

    if(!lname)return res.status(400).send({status:false, message:"Please enter last name"})
    if(!validName(lname)) return res.status(400).send({status:false, message:"Please enter valid last name"})

    if(!email)return res.status(400).send({status:false, message:"Please enter email"})
    if(!validMail(email)) return res.status(400).send({status:false, message:"Please enter valid email"})

    if(!password)return res.status(400).send({status:false, message:"Please enter password"})
    if(!validPassword(password)) return res.status(400).send({status:false, message:"Please enter valid password"})

    if(!phone)return res.status(400).send({status:false, message:"Please enter phone number"})
    if(!validNumber(phone)) return res.status(400).send({status:false, message:"Please enter valid phone "})

    let existingCostumer= await costumerModel.findOne({email:email, phone:phone})
    if(existingCostumer) return res.status(400).send({status:false, message:"email or phone already in use"})

    if(!address)return res.status(400).send({status:false, message:"Please enter address"})
    let{street,city,pincode}=address
    if(!street)return res.status(400).send({status:false, message:"Please enter street"})
    if(!validStreet(street))return res.status(400).send({status:false, message:"Please enter valid street"})
    if(!city)return res.status(400).send({status:false, message:"Please enter city"})
    if(!validCity(city))return res.status(400).send({status:false, message:"Please enter  valid city"})
    if(!pincode)return res.status(400).send({status:false, message:"Please enter pincode"})
    if(!validPin(pincode))return res.status(400).send({status:false, message:"Please enter valid pincode"})

    let createdCostumer= await costumerModel.create(data)
    res.status(201).send({status:false, message:"Success",data:createdCostumer})
}

module.exports={createCostumer}