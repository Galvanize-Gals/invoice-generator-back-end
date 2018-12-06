const db = require('../../db')
const bcrypt = require('bcrypt')
const users = require('./users')
const knex = require('../../db/index')


const login = (email, password) => {
  let user
  return users.getUserByEmail(email)
    .then(data => {
      if (!data) throw { status: 400, message: 'Bad Request!' }
      user = data
      return bcrypt.compare(password, data.hashword)
    })
    .then(status => {
      if (!status) throw { status: 401, message: 'Unauthorized' }
      delete user.password
      return user
    })
}

const isVendorOnInvoice = (invoiceId) => {
  return knex('accounts_invoices')
  .where({'accounts_invoices.invoice_id': invoiceId})
}

module.exports = { login, isVendorOnInvoice }
