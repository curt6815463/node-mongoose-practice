var express = require('express')
var router = express.Router()

var users = require('../controller/users')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})

router.post('/', users)
module.exports = router
