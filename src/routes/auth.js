const express = require('express')
const router = express.Router()
const ctl = require('../controllers/auth')

router.get('/token', ctl.isAuthenticated, ctl.getAuthStatus)
router.post('/token', ctl.login)


module.exports = router
