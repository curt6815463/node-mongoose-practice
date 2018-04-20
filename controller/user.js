var userModel = require('../model/user')
var user = {
  createUser:function (req, res, next) {
    var newUser = userModel({
      username: req.body.username,
      password: req.body.password,
      admin: req.body.admin,
      location: req.body.location,
      meta:{
        age:req.body.age,
        website:req.body.website
      },
      created_at: req.body.created_at,
      updated_at: req.body.updated_at
    })
    newUser.save(function (err) {
      if(err){
        res.status(400)
        res.json({
          error: "create fail",
          message:err
        })
      }
      else {
        res.json({
          response:"create success"
        })
      }
    })
  },
  findUserById:function (req, res, next) {
    // get a user with ID of 1
    userModel.findById('5ad896074b39e039f8c4297e', function(err, user) {
      if (err) throw err;

      // // change the users location
      // user.location = 'uk';

      // save the user
      // user.save(function(err) {
      //   if (err) throw err;
      //
      //   console.log('User successfully updated!');
      // });
      res.json(user)
    });
  },
  findUser:function (req, res, next) {
    userModel.find({ username: `${req.params.username}` }, function(err, user) {
      if (err) throw err;
      res.json(user)
    });
  },
  findAllUser:function (req, res, next) {
    // get all the users
    userModel.find({}, function(err, users) {
      if(err){
        res.status(400)
        res.json({
          error: "Find all user fail",
          message:err
        })
      }
      else {
        res.json({
          users
        })
      }
    });
  }
}
module.exports = user
