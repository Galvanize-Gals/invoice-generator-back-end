const express = require('express')


const router = express.Router();
const ctr = require('../controllers/invoices')

router.get('/', ctr.getAll)
router.get('/:invoiceId', ctr.getOne)
router.post('/', ctr.create)

module.exports = router;
