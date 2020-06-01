// export external libraries
const { check } = require('express-validator')

// import internal modules



module.exports.create = [

    check('title')
        .exists().withMessage('title must be provided')
        .isString().withMessage('title provided must be valid'),

    check('body')
        .exists().withMessage('body must be provided')
        .isLength({ min: 4, max: 15 }).withMessage('body provided must be 4 - 15 characters long')

]
