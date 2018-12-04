const model = require('../models/vendor')

function getAll(req, res, next){
    model.getAll(parseInt(req.params.vendorId))
    .then(function(data){
      res.send({ data })
    })
    .catch(next)
}

module.exports = {
    getAll
}
