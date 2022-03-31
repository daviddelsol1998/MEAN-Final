
const mongoose = require('mongoose')
require('dotenv').config({path: 'variables.env'})

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CREDENTIALS,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log('Connected to DB successfully')

    } catch (err) {
        console.error(err)
        process.exit(1)
    }

}

module.exports = dbConnection