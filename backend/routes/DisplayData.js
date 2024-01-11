const express = require("express");
const router = express.Router();

//post method because we have to send a huge data to the frontend
router.post("/foodData",(req,res)=>{
  try {
    res.send([global.foods,global.foodCategory])
    //   console.log(global.foods,global.foodCategory);
  } catch (error) {
    console.lof(error.message);
    res.send("Server Error")
  }
})

module.exports = router;