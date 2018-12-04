const model = require('../models/invoices')

function getAllVendorInvoices(req, res, next){
    model.getAllVendorInvoices(parseInt(req.body.vendorId))
    .then(function(data){
      res.send({ data })
    })
    .catch(next)
}

function getAllClientInvoices(req, res, next){
    model.getAllClientInvoices(parseInt(req.body.clientId))
    .then(function(data){
      res.send({ data })
    })
    .catch(next)
}

function getOne(req, res, next){
    model.getOne(parseInt(req.params.invoiceId))
    .then(function(data){
        if(data){
            return res.send({ data })
        }
        throw ({ status: 404, message: 'Invoice Not Found'})
    })
    .catch(next)
}

function create(req, res, next) {
    model.create(req.body.invoice_number, req.body.due_date, req.body.notes)
    .then(function(data) {
        if(data){
            return res.status(201).send({data})
        }
        throw ({ status: 400, message: "Invoice Not Created",})
    })
    .catch(next)
}

function update(req, res, next) {
    model.update(req.params.invoiceId, req.body.invoice_number, req.body.due_date, req.body.notes)
    .then(function(data) {
        if(data){
            return res.status(201).send({data})
        }
        throw({ status: 400, message: "Invoice Not Updated"})
    })
    .catch(next)
}

function remove(req, res, next) {
    model.remove(req.params.invoiceId)
    .then(function(data){
        if(data){
            return res.status(201).send({data})
        }
        throw ({status: 400, message: "Invoice Not Deleted"})
    })
    .catch(next)
}



module.exports = {
    getOne,
    create,
    update,
    remove,
    getAllVendorInvoices,
    getAllClientInvoices
}
