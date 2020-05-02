const express = require('express')
const app = express()
const port = process.env.port || 3000

app.get('/', function(req, res) {
    res.send('Hello World!')
})

app.listen(port, () => console.log(`My Sync API listening on port ${port}`))