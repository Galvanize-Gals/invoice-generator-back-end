const express = require('express')


const router = express.Router({ mergeParams: true });
const ctr = require('../controllers/invoices')
const auth = require('../controllers/auth')


router.get('/vendor', auth.authenticated, ctr.getAllVendorInvoices)
router.get('/client', auth.authenticated, ctr.getAllClientInvoices)

router.get('/vendor/:invoiceId', auth.authenticated, ctr.getOneVendorInvoice)
router.get('/client/:invoiceId', auth.authenticated,  ctr.getOneClientInvoice)

router.post('/vendor', auth.authenticated, ctr.create)
router.put('/vendor/:invoiceId', auth.authenticated, ctr.update)
router.delete('/vendor/:invoiceId', auth.authenticated, ctr.remove)

router.post('/vendor/:invoiceId/line_items', auth.authenticated, ctr.createLineItem)


module.exports = router;
