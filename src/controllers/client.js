const model = require('../models/client')

function getAll(req, res, next){
    model.getAll(parseInt(req.params.clientId))
    .then(function(data){
      res.send({ data })
    })
    .catch(next)
}

module.exports = {
    getAll
}
