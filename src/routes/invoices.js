const express = require('express')


const router = express.Router({ mergeParams: true });
const ctr = require('../controllers/invoices')
const auth = require('../controllers/auth')


router.get('/vendor', auth.authenticated, auth.isSelf, ctr.getAllVendorInvoices)
router.get('/client', auth.authenticated, auth.isSelf, ctr.getAllClientInvoices)

router.get('/:invoiceId/vendor', auth.authenticated, auth.isSelf, auth.isVendorOnInvoice, ctr.getOneVendorInvoice)
router.get('/:invoiceId/client', auth.authenticated,  auth.isSelf, ctr.getOneClientInvoice)

router.post('/vendor', auth.authenticated, auth.isSelf, ctr.create)

router.put('/:invoiceId/vendor', auth.authenticated, ctr.update)
router.delete('/:invoiceId/vendor', auth.authenticated, auth.isSelf, auth.isVendorOnInvoice, ctr.remove)

router.post('/:invoiceId/vendor/line_items', auth.authenticated, auth.isSelf, auth.isVendorOnInvoice, ctr.createLineItem)


module.exports = router;
