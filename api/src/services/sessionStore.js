const uniqid = require('uniqid')
const assert = require('assert')
const _ = require('lodash')

class Session {
    constructor({ id }) {
        this.id = id || uniqid()
        this.sockets = []
    }
}

class SessionsStore {
    constructor() {
        this.sessions = {}
    }

    getSession({ id }) {
        let session
        if (this.sessions[id]) {
            session = this.sessions[id]
        } else {
            session = new Session({ id })
            this.sessions[session.id] = session
        }
        return session
    }

    setSocketSession({ ws, id }) {
        ws.session = this.getSession({ id })
        ws.session.sockets.push(ws)
    }

    clearSocketSession({ ws }) {
        assert(ws.session, 'Tried removing socket which was not attached to a session.')
        _.remove(ws.session.sockets, ws2 => ws === ws2)
        if (ws.session.sockets.length === 0) _.remove(this.sessions, session => session === ws.session)
    }
}

module.exports = new SessionsStore()