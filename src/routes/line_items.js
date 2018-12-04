const express = require('express');
const auth = require('/auth.js')


const router = express.Router();
const ctr = require('../controllers/line_items')


router.get('/:invoiceId/line_items', auth.authenticated, auth.isSelf, ctr.getAll)
router.get('/:invoiceId/line_items/:lineItemId', auth.authenticated, auth.isSelf, ctr.getOne)
router.post('/:invoiceId/line_items', auth.authenticated, auth.isSelf, ctr.create)
router.delete('/:invoiceId/line_items/:line_item_id', auth.authenticated, auth.isSelf,  ctr.remove)




module.exports = router;