const model = require('../models/invoices')

function getAll(req, res, next){
    model.getAll()
    .then(function(data){
      res.send({ data })
    })
    .catch(next)
}


module.exports = {
    getAll
}
