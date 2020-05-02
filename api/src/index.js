const express = require('express')
const app = express()
const port = process.env.port || 3000

app.use(require('cors')())
app.use(require('body-parser').urlencoded({ extended: true }))
app.use(require('body-parser').json())
// app.use(require('express-ws')(app))

app.get('/', function(req, res) {
    res.send('Hello World!')
})

require('./routes')(app)

app.listen(port, () => console.log(`My Sync API listening on port ${port}`))