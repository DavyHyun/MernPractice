const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(404);
    throw new Error("User Already Exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    pic,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      isAdmin: user.isAdmin,
      email: user.email,
      pic: user.pic,
    });
  } else {
    res.status(400);
    throw new Error("Error Occured");
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      isAdmin: user.isAdmin,
      email: user.email,
      pic: user.pic,
    });
  } else {
    res.status(400);
    throw new Error("Invalid Email or Password");
  }
});

module.exports = { registerUser, authUser };
