require('dotenv').config()
const express = require('express')
const routes = require('./routes/web')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use('',routes)

app.listen('3001', () => { console.log('server run on port 3001') })
