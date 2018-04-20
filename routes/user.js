var express = require('express')
var router = express.Router()
var user = require('../controller/user')

/* GET user listing. */

router.get('/all', user.findAllUser)
router.get('/:username', user.findUser)
router.get('/id/:id', user.findUserById)


router.post('/', user.createUser)

module.exports = router
