const express = require('express')

const app = express()

const dbConnection = require('./config/database')

dbConnection()

app.use('/api/products', require('./routes/product'))

app.get('/', (req, res) => {
    res.send('Hi')
})

app.listen(3000, () => {
    console.log('RUNNING')
})