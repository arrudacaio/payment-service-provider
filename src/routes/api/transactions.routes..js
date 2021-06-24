const express = require('express')

const TransactionsController = require('../../controllers/transactions.controller')

const router = express.Router()

router.get('/', TransactionsController.testConnection)
// router.post('/', TransactionsController.createsTransaction)


module.exports = router