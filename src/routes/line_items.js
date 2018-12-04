const express = require('express');

const router = express.Router();
const ctr = require('../controllers/line_items')
const auth = require('../controllers/auth')


router.get('/:invoiceId/line_items', auth.authenticated, ctr.getAll)
router.get('/:invoiceId/line_items/:lineItemId', auth.authenticated, ctr.getOne)
router.post('/:invoiceId/line_items', auth.authenticated, ctr.create)
router.delete('/:invoiceId/line_items/:line_item_id', auth.authenticated, ctr.remove)




module.exports = router;