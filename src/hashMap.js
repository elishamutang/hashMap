class HashMap {
    constructor() {
        this.list = new Array(16)
    }

    hash(key) {
        let hashCode = 0

        const primeNumber = 31
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % 16
        }

        // console.log(hashCode)

        return hashCode
    }

    set(key, value) {
        let keyHash = this.hash(key)

        // For the incoming {key: value} pair, if the hash code (or index) contains an existing value,
        // link the incoming pair to the existing pair.
        if (this.list[keyHash]) {
            this.list[keyHash].next = { [key]: value }
        } else {
            this.list[keyHash] = { [key]: value }
        }
    }

    get(key) {
        let keyHash = this.hash(key)

        // Gets key and returns value
        if (this.list[keyHash]) {
            // !* For linked list, check if key is correct, if not go next.
            return this.list[keyHash][key]
        } else {
            return null
        }
    }

    has(key) {}

    remove(key) {}

    length() {}

    clear() {}

    keys() {}

    values() {}

    entries() {}
}

const test = new HashMap()
test.set('Carlos', 'car is lost')
test.set('Carla', 'car is la')
test.set('John', "You can't see me!")
test.set('Pablo', 'Escobarrrrrr')
test.set('Kevin', 'Gideon')
test.set('Malaysia', 'Kuala Lumpur')

console.log(test.get('John'))
console.log(test.get('Carlos'))
console.log(test.get('Malaysia'))
// console.log(test.get('kohn'))
// console.log(test.list)
