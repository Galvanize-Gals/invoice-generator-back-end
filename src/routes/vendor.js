const express = require('express')


const router = express.Router();
const ctr = require('../controllers/vendor')

router.get('/:vendorId', ctr.getAll)

module.exports = router;
