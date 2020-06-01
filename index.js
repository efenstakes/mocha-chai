// include external libraries
const express = require('express')
const body_parser = require('body-parser')
const dot_env = require('dotenv')
const cors = require('cors')
const morgan = require('morgan')


// include internal libraries

// routes
const account_routes = require('./app/routes/account')
const post_routes = require('./app/routes/posts')


// get environment vars from .dot
dot_env.config()
const PORT = process.env.PORT || 4444



// initialize express apllication instance
const app = express()

// log request info
app.use(morgan('dev'))


// setup server to allow cor's
app.use(cors())

// setup body parser to help acess json and urlencoded data from
// client applications
app.use(body_parser.json())
app.use(body_parser.urlencoded({ extended: false }))


// hook up routes with the app instance
app.use('/api/accounts', account_routes)
// app.use('/api/post', post_routes)


app.get('/api/tester', (req, res)=> {
	res.json({ working: 'oh yes' })
})


// start application
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Mochachai server started at port ${PORT}`)
})