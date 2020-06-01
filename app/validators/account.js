// export external libraries
const { check } = require('express-validator')

// import internal modules



module.exports.create = [

    check('email')
        .exists().withMessage('Email must be provided')
        .isEmail().withMessage('Email provided must be valid'),

    check('name')
        .exists().withMessage('Name must be provided')
        .isLength({ min: 4, max: 15 }).withMessage('Name provided must be 4 - 15 characters long')

]
