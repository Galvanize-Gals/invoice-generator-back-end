const model = require('../models/line_items')

function getAll(req, res, next){
    model.getAll(parseInt(req.params.invoiceId))
    .then(function(data){
      res.send({ data })
    })
    .catch(next)
}

function getOne(req, res, next){
    model.getOne(parseInt(req.params.line_item_id))
    .then(function(data){
        if(data){
            return res.send({ data })
        }
        throw ({ status: 404, message: 'Item Not Found'})
    })
    .catch(next)
}

module.exports = {
    getAll,
    getOne
}