// include external libraries
const Router = require('express').Router()



// include external libraries
const account_controller = require('../controllers/account')
const validators = require('../validators/account')


Router.post('/', validators.create, account_controller.create)

Router.delete('/:id', account_controller.delete)

Router.get('/', account_controller.get_all)




module.exports = Router