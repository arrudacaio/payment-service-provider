import express from 'express'
import cors from 'cors'
// import router from ''


const app = express() // Creates a express application
const PORT = 3000


app.use(express.json()) 
app.use(cors()) 
// app.use(router)

app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`)
})