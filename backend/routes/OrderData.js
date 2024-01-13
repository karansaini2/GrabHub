const express = require("express");
const router = express.Router();
const Order = require("../models/Orders")

router.post('/orderData',async(req,res)=>{
    let data = req.body.order_data;
    // await data.splice(0,0,{Order_date : req.body.order_date});
    data.unshift({ Order_date: req.body.order_date });

    //if email not existing in the db then create else : InsertMany()
    let eId = await Order.findOne({'email': req.body.email})
    console.log(eId);
    
    //this is the first ever order for the user
    if(eId === null){
        try {
            await Order.create({
                email : req.body.email,
                order_data : [data]
            })
            res.json({ success: true });
        } catch (error) {
           console.log(error.message);
           res.status(500).send("Server Error: " + error.message);
        }
    }
    else{
        try {
          await Order.findOneAndUpdate({email : req.body.email},{$push : {order_data : data}}).then(()=>{
            res.json({success : true})
          });
            
        } catch (error) {
            res.status(500).send("Server Error: " + error.message);
        }
    }
});

router.post('/myorders',async(req,res)=>{
    try {
        //we will send the email from the frontend to backend
        let myData = await Order.findOne({'email':req.body.email});

        res.json({orderData : myData})
    } catch (error) {
        res.status(500).send("Server Error: " + error.message);
    }
})

module.exports = router;