const express = require('express')
const cors = require('cors')
const router = require('./routes/router')
const PORT = process.env.PORT || 3000



const app = express() 


app.use(express.json()) 
app.use(cors()) 
app.use(router)

app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`)
})

