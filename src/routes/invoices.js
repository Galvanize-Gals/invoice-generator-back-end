const express = require('express')


const router = express.Router();
const ctr = require('../controllers/invoices')

router.get('/', ctr.getAll)
router.get('/:invoiceId', ctr.getOne)
router.post('/', ctr.create)
router.put('/:invoiceId', ctr.update)
router.delete('/:invoiceId', ctr.remove)

module.exports = router;
