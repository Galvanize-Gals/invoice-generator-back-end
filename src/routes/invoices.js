const express = require('express')


const router = express.Router({ mergeParams: true });
const ctr = require('../controllers/invoices')
const auth = require('../controllers/auth')


router.get('/vendor', auth.authenticated, ctr.getAllVendorInvoices)
router.get('/client', auth.authenticated, ctr.getAllClientInvoices)

router.get('/:invoiceId/vendor', auth.authenticated, ctr.getOneVendorInvoice)
router.get('/:invoiceId/client', auth.authenticated,  ctr.getOneClientInvoice)

router.post('/vendor', auth.authenticated, ctr.create)
router.put('/:invoiceId/vendor', auth.authenticated, ctr.update)
router.delete('/:invoiceId/vendor', auth.authenticated, ctr.remove)

router.post('/:invoiceId/vendor/line_items', auth.authenticated, ctr.createLineItem)


module.exports = router;
