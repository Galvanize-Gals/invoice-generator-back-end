const model = require('../models/line_items')

function getAll(req, res, next) {
    model.getAll(parseInt(req.params.invoiceId))
        .then(function (data) {
            res.send({ data })
        })
        .catch(next)
}

function getOne(req, res, next) {
    model.getOne(parseInt(req.params.lineItemId))
        .then(function (data) {
            if (data) {
                return res.send({ data })
            }
            throw ({ status: 404, message: 'Item Not Found' })
        })
        .catch(next)
}

function create(req, res, next) {
    model.create(req.body.items)
        .then(function (data) {
            if (data) {
                return res.status(201).send({ data })
            }
            throw ({ status: 400, message: "Line Item Not Created" })
        })
        .catch(next)
}

function remove(req, res, next) {
    model.remove(req.params.line_item_id)
        .then(function (data) {
            if (data) {
                return res.status(201).send({ data })
            }
            throw ({ status: 400, message: "Line Item Not Deleted" })
        })
        .catch(next)
}

module.exports = {
    getAll,
    getOne,
    create,
    remove
}