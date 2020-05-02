const postYoutubeEvent = require('../services/postYoutubeEvent')
const assert = require('assert')
const _ = require('lodash')

const postYoutubeEventRoute = (req, res) => {
    assert(_.has(req.body, 'type'))
    postYoutubeEvent({type: req.body.type})
    res.send('success!')
}

module.exports = (app) => {
    app.post('/youtube-events', postYoutubeEventRoute)
}