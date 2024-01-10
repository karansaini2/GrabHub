const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

router.post(
  "/createuser",
  //here we are using the validator to check whether the user has enter the appropriate email , password means minimum conditons it to be a email , password and name 
  [
    body("email").isEmail(),
    body("name").isLength({ min: 5 }),
    body("password", "incorrect password").optional().isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    //if their is error then send a error status response
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
   //if their is no error then create the user 
    try {
      await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        location: req.body.location,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

router.post(
  "/loginuser",
  [
    body("email").isEmail(),
    body("password", "incorrect password").optional().isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let email = req.body.email;

    try {

      //here we are finding the data from the database using the field email
      let userData = await User.findOne({ email });
      //agar wo email wala userdata nahi hai tp error status send krdo
      if (!userData) {
        return res
          .status(400)
          .json({ errors: "try logging with correct credentials" });
      }

      //here we are checcking whether the password enter by the user in the form is not equal to password in the database then send the error status response
      if (req.body.password !== userData.password) {
        return res
          .status(400)
          .json({ errors: "try logging with correct credentials" });
      }
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

module.exports = router;
