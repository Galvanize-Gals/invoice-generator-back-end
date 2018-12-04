const express = require('express')


const router = express.Router();
const ctr = require('../controllers/invoices')
const auth = require('../controllers/auth')
router.get('/vendor', auth.authenticated, ctr.getAllVendorInvoices)
router.get('/client', auth.authenticated, ctr.getAllClientInvoices)

router.get('/:invoiceId', auth.authenticated, ctr.getOne)
router.post('/', auth.authenticated, ctr.create)
router.put('/:invoiceId', auth.authenticated, ctr.update)
router.delete('/:invoiceId', auth.authenticated, ctr.remove)

module.exports = router;
