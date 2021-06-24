const express =  require('express')
const TransactionsRoutes = require('./api/transactions.routes.')
const router = express.Router()

router.use('/transactions', TransactionsRoutes)

module.exports = router