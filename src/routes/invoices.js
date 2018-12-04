const express = require('express')
const auth = require('/auth.js')

const router = express.Router();
const ctr = require('../controllers/invoices')

router.get('/', auth.authenticated, auth.isSelf, ctr.getAll)
router.get('/:invoiceId', auth.authenticated, auth.isSelf, ctr.getOne)
router.post('/', auth.authenticated, auth.isSelf, ctr.create)
router.put('/:invoiceId', auth.authenticated, auth.isSelf, ctr.update)
router.delete('/:invoiceId', auth.authenticated, auth.isSelf, ctr.remove)

module.exports = router;
