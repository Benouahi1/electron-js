const express = require('express')
const router = express.Router()

const { getData,AjouterData} = require('../controllers/userController')

router.post('/Ajouter',AjouterData)
router.get('/Liste',getData)

module.exports = router
