const {check} = require('express-validator')

module.exports = {
    numberOfImages : check('size').trim().isInt().withMessage("please enter a integer number")
}