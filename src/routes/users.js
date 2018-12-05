const express = require('express')
const router = express.Router({mergeParams: true})
const userController = require('../controllers/users')

router.post('/', userController.create)
// router.get('/', userController.getAll)
router.get('/:userId', userController.getOne)


router.use('/:userId/invoices', require('../routes/invoices'))

module.exports = router
