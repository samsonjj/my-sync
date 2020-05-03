const express = require('express')
const app = express()
const port = process.env.port || 3000

const wsYoutube = require('./services/wsYoutube')

app.use(require('cors')())
app.use(require('body-parser').urlencoded({ extended: true }))
app.use(require('body-parser').json())

require('express-ws')(app)

app.ws('/', function(ws, req) {
    wsYoutube(ws)
})

app.get('/', function(req, res) {
    res.send(JSON.stringify({message: 'Hello World!'}))
})

require('./routes')(app)

app.listen(port, () => console.log(`My Sync API listening on port ${port}`))