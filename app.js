const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const PORT = process.env.PORT || config.get('PORT') 
const authRoute = require('./routes/auth.route')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api/auth', authRoute)

const run = async () => {
    try {
        
        await mongoose.connect( config.get('mongoURI') )

        app.listen(PORT, () => { console.log('App started on port ' + PORT) })

    } catch (err) {
        console.log(err.message);
    }
}

run()
