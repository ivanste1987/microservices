const express = require('express')
const bodyParser = require('body-parser')
const axios =  require('axios')

const app = express()
app.use(bodyParser.json())

const PORT  = 6000




app.listen(PORT, () => {
    console.log("Server is runing on port: " + PORT + " ");
})