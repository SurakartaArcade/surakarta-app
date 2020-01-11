class EventStore {
    constructor (event) {
        this.event = event
        this.eventData = null
        this.listeners = []
    }

    get data () {
        return this.eventData
    }
}

export class UIBridge {
    constructor () {
        this.eventStores = {}

        this.orientation = 'portrait'
        this.inputPlayer = 'black'
        this.turnPlayer = 'red'
    }

    addEventStore (name) {
        this.eventStores[name] = new EventStore(name)
        return this
    }

    removeEventStore (name) {
        this.eventStores[name] = null
        return this
    }

    registerListener (event, listener) {
        this.eventStores[event].listeners.push(listener)
        return this
    }

    unregisterListener (event, listener) {
        const eventStore = this.eventStores[event]
        const index = eventStore.listeners.indexOf(listener)

        if (index !== -1) {
            eventStore.listeners.splice(index, 1)
        }

        return this
    }

    fire (event, data) {
        const store = this.eventStores[event]
        store.eventData = data

        store.listeners.forEach(listener => listener(store))
    }
}
