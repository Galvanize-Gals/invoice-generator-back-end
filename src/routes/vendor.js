const express = require('express')
const auth = require('/auth.js')


const router = express.Router();
const ctr = require('../controllers/vendor')

router.get('/:vendorId', auth.authenticated, auth.isSelf, ctr.getAll)

module.exports = router;
