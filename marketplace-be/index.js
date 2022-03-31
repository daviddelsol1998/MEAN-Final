const express = require('express')
const cors = require('cors')
const app = express()

const dbConnection = require('./config/database')
const { use } = require('./routes/product')

dbConnection()
app.use(cors())

app.use(express.json())

app.use('/api/products', require('./routes/product'))

app.get('/', (req, res) => {
    res.send('Hi')
})

app.listen(3000, () => {
    console.log('RUNNING')
})