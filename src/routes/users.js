const express = require('express')
const router = express.Router()
const userController = require('../controllers/users')

router.post('/signup', userController.create)
router.get('/', userController.getAll)

module.exports = router
