
const handleYoutubePlayerEvent = require('./handleYoutubePlayerEvent')
const sessionStore = require('./sessionStore')

function wsYoutube(ws) {
    ws.on('open', function() {})
    ws.on('message', (json) => {
        const data = JSON.parse(json)
        if (data.type === 'JOIN_SESSION') {
            sessionStore.setSocketSession({
                ws,
                id: data.sessionId,
            })
            ws.send(JSON.stringify({
                type: 'SESSION_SET',
                id: ws.session.id,
            }))
            return
        }
        for (let ws2 of ws.session.sockets) {
            if (ws !== ws2) ws2.send(json)
        }
        // if (data.type === 'YOUTUBE_PLAYER_EVENT') {
        //     handleYoutubePlayerEvent(data.event)            
        // }
    })
    ws.on('close', () => {
        sessionStore.clearSocketSession({ ws })
    })
}

module.exports = wsYoutube