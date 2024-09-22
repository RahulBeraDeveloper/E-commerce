// const user = require('../models/user')
// exports.createOrUpdateUser = async (req, res) => {
//  const {name,picture,email} = req.user
//  const user = await user.findOneAndUpdate({email},{name:name,picture:picture},{new:true})


//  if(user){
//     console.log('user updated',user)
//     res.json(user)
//  }else{
//     const newUser = await new user({
//         email,
//         name,
//         picture,
//     }).save();
//     console.log('user created',newUser)
//     res.json(newUser);
//  }

// };


const User = require("../models/user");

exports.createOrUpdateUser = async (req, res) => {
  const { name, picture, email } = req.user;

  const user = await User.findOneAndUpdate(
    { email },
    { name: email.split("@")[0], picture },
    { new: true }
  );
  if (user) {
    console.log("USER UPDATED", user);
    res.json(user);
  } else {
    const newUser = await new User({
      email,
      name: email.split("@")[0],
      picture,
    }).save();
    console.log("USER CREATED", newUser);
    res.json(newUser);
  }
};




exports.currentUser = async (req, res) => {
  User.findOne({ email: req.user.email }).exec((err, user) => {
    if (err) throw new Error(err);
    res.json(user);
  });
};
