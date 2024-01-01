const express = require('express')
const router = express.Router()

const MainController = require('../controllers/MainController')

const errorHandlers = require('../middlewares/errorHandlers')
const authentication = require('../middlewares/authentication')

//===============================================================================

router.get('/', MainController.serverApp)


//===============================================================================

router.use(errorHandlers)


module.exports = router