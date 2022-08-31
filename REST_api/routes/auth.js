const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    // GENERATE NEW CONCEALED PASSWORD
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash("123888", salt);

    // CREATE NEW USER
    // const newUser = new User({
    //   username: req.body.username,
    //   email: req.body.email,
    //   password: hashedPassword,
    // });
    const newUser = new User({
      username: "billy",
      email: "billy@gmail.com",
      password: hashedPassword,
    });

    //SAVE USER AND RESPOND
    const user = await newUser.save();

    res.status(200).json(user).send("well postman  is now working successful");
  } catch (error) {
    res.status(500).json(error);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("user not found");

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword && res.status(400).json("wrong password");

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
