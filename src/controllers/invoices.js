const model = require('../models/invoices')


function getAllVendorInvoices(req, res, next){
    model.getAllVendorInvoices(parseInt(req.params.userId))
    .then(function(data){
      res.send({ data })
    })
    .catch(next)
}

function getAllClientInvoices(req, res, next){
    model.getAllClientInvoices(parseInt(req.params.userId))
    .then(function(data){
      res.send({ data })
    })
    .catch(next)
}

function getOneVendorInvoice(req, res, next){
    model.getOneVendorInvoice(parseInt(req.params.invoiceId))
    .then(function([data]){
        model.getInvoiceLineItems(req.params.invoiceId)
        .then(lineItems => {
            res.send({ data, lineItems })
        })
    })
    .catch(next)
}

function getOneClientInvoice(req, res, next){
    model.getOneClientInvoice(parseInt(req.params.invoiceId))
    .then(function([data]){
        model.getInvoiceLineItems(req.params.invoiceId)
        .then(lineItems => {
            res.send({ data, lineItems })
        })
    })
    .catch(next)
}

function create(req, res, next) {
    model.create(req.params.userId, req.body.clientId, req.body.invoice_number, req.body.due_date, req.body.notes)
    // unwrap data in model, not controller
    .then(function([data]) {
        if(data){
            return res.status(201).send({ data })
        }
        throw ({ status: 400, message: "Invoice Not Created",})
    })
    .catch(next)
}

function update(req, res, next) {
    model.update(req.params.invoiceId)
    // You might need to make sure that data in not in an array
    .then(function(data) {
        if(data){
            return res.status(201).send({ data })
        }
        throw({ status: 400, message: "Invoice Not Updated"})
    })
    .catch(next)
}

function remove(req, res, next) {
    model.remove(req.params.invoiceId)
    // You might need to make sure that data in not in an array
    .then(function(data){
        if(data){
            return res.status(201).send({ data })
        }
        throw ({status: 400, message: "Invoice Not Deleted"})
    })
    .catch(next)
}


function createLineItem(req, res, next) {
    // Clean up console.log's
    console.log(req.body)
    model.createLineItem(req.body.items)
        .then(function ([data]) {
            if (data) {
                return res.status(201).send({ data })
            }
            throw ({ status: 400, message: "Line Item Not Created" })
        })
        .catch(next)
}

module.exports = {
    create,
    update,
    remove,
    getAllVendorInvoices,
    getAllClientInvoices,
    getOneVendorInvoice,
    getOneClientInvoice,
    createLineItem
}
