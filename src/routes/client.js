const express = require('express')


const router = express.Router();
const ctr = require('../controllers/client')

router.get('/:clientId', ctr.getAll)

module.exports = router;
