var User = require('../model/users')

module.exports = function (req, res, next) {
  var newUser = User({
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

}
