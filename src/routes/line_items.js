const express = require('express');

const router = express.Router();
const ctr = require('../controllers/line_items')


router.get('/:invoiceId/line_items', ctr.getAll)
router.get('/:invoiceId/line_items/:lineItemId', ctr.getOne)
router.post('/:invoiceId/line_items', ctr.create)
// router.delete('/:line_item_id', ctr.deleteOne)
// router.put('/:line_item_id', ctr.edit)



module.exports = router;