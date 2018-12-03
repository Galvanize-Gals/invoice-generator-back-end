const express = require('express')


const router = express.Router();
const ctr = require('../controllers/invoices')

router.get('/', ctr.getAll)

module.exports = router;
