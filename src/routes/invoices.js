const express = require('express')


const router = express.Router();
const ctr = require('../controllers/invoices')
const auth = require('../controllers/auth')
router.get('/vendor', auth.authenticated, ctr.getAllVendorInvoices)
router.get('/client', auth.authenticated, ctr.getAllClientInvoices)

router.get('/:invoiceId', ctr.getOne)
router.post('/', ctr.create)
router.put('/:invoiceId', ctr.update)
router.delete('/:invoiceId', ctr.remove)

module.exports = router;
