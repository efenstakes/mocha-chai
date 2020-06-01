
const { validationResult } = require('express-validator')
const validators = require('../validators/index')

const accounts = [

    {
        id: 1, 
        name: 'John King', 
        email: 'john@gmail.com'
    },
    {
        id: 2, 
        name: 'Elle Elizabeth', 
        email: 'elle@gmail.com'
    },
    {
        id: 3, 
        name: 'Silvia Tob', 
        email: 'silvia@gmail.com'
    },

]





// create
exports.create = async (req, res)=> {
    let response = { saved: false, errors: [] }

    // check for errors
    let errors = validationResult(req).formatWith(validators.errorFormatter)
    if (!errors.isEmpty()) {
        response.errors = errors.array()
        return res.json(response)
    }
    
    let { name, email } = req.body

    console.log('req.body ', req.body)
    accounts.push({ name, email, id: Date.now() })
    
    response.saved = true
    res.json(response)
}


// delete
exports.delete = async (req, res)=> {
    let response = { deleted: false }

    let { id } = req.params

    accounts = accounts.filter((acc)=> acc.id != id)
    
    response.deleted = true
    res.json(response)
}


// get all
exports.get_all = async (req, res)=> {
    let response = { accounts: [] }

    response.accounts = accounts

    res.json(response)
}