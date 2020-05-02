const uniqid = require('uniqid')

const sessions = {}

const createSession() {
    const id = uniqid()
    sessions[id] = {
        id
    }
}