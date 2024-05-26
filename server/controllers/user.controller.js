const User = require("../models/User");
const becrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Collection = require("../models/Collection");
const registerContoller = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !password || !email) {
      return res.status(400).json({ msg: "please enter all fields" });
    }
    const existingUser = await User.findOne({
      email,
    });
    if (existingUser) {
      return res.status(409).json({
        msg: "user already exist",
      });
    } else {
      const hashedpassword = await becrypt.hash(password, 10);

      const newUser = await User.create({
        name,
        email,
        password: hashedpassword,
      });

      const createduser = await User.findById(newUser.id, "-password");
      
      if(newUser){
        const newCollection = await Collection.create({
        user: newUser._id,
      });
     
      res.json({
        msg: "User registered successfully",
        user: createduser,
      });
    }
    
    }
  } catch (err) {
    res.json({ msg: err.message });
  }
};

const loginController = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ msg: "user not found" });
  } else {
    const isMatch = await becrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "incorrect password" });
    } else {
      const token = await jwt.sign(
        {
          id: user._id,
          name: user.name,
          email: user.email,
        },
        "secret"
      );

      if (token) {
          res.json({ token });
       
      }
    }
  }
};

module.exports = {
  registerContoller,
  loginController,
};
