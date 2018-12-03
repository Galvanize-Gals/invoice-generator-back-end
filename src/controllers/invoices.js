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


module.exports = {
    getAll,
    getOne
}
