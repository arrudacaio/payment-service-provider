const express = require('express')

const TransactionsController = require('../../controllers/transactions.controller')

const router = express.Router()

router.get('/', TransactionsController.testConnection)

module.exports = router