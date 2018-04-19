var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(res.body);
  res.render('index', { title: 'Express' })
})

router.post('/', function(req, res, next) {
  console.log(req.body);
  var user = {
    name:req.body.a,
    date:req.body.b
  }
  res.json(user)
})
module.exports = router
