const model = require('../models/invoices')

function getAll(req, res, next){
    model.getAll()
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
    console.log(req.body)
    model.create(req.body.invoice_number, req.body.due_date, req.body.notes)
    .then(function(data) {
        if(data){
            return res.status(201).send({data})
        }
        throw ({ status: 400, message: "Invoice Not Created",})
    })
    .catch(next)
}


module.exports = {
    getAll,
    getOne,
    create
}
