var express = require('express')
var router = express.Router()
var user = require('../controller/user')

/* GET user listing. */

router.get('/all', user.findAllUser)

router.post('/', user.createUser)

module.exports = router
