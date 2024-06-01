class Node {
    constructor(key = null, value = null, next = null) {
        return {
            [key]: value,
            next,
        }
    }
}

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

        return hashCode
    }

    set(key, value) {
        let keyHash = this.hash(key)
        let newNode = new Node(key, value)

        // For the incoming {key: value} pair, if the hash code (or index) contains an existing value,
        // link the incoming pair to the existing pair.
        if (this.list[keyHash]) {
            this.list[keyHash].next = newNode
        } else {
            this.list[keyHash] = newNode
        }
    }

    get(key) {
        let keyHash = this.hash(key)

        // Gets key and returns value
        if (this.list[keyHash]) {
            let tmp = this.list[keyHash]

            while (!tmp[key]) {
                tmp = tmp.next
            }

            return tmp[key]
        } else {
            return null
        }
    }

    has(key) {
        let tmp = this.list
        let keyHash = this.hash(key)

        if (tmp[keyHash]) {
            return true
        } else {
            return false
        }
    }

    remove(key) {
        let tmp = this.list
        let keyHash = this.hash(key)

        if (this.has(key)) {
            // If node exists at the head, remove node. Else, traverse through linked list until a key match is found
            // and then keep track of previous node to set the next property to null.
            if (tmp[keyHash][key] && tmp[keyHash].next === null) {
                return delete tmp[keyHash]
            } else {
                if (tmp[keyHash][key]) {
                    tmp[keyHash] = tmp[keyHash].next
                } else {
                    let node = tmp[keyHash]
                    let prev

                    while (!node[key]) {
                        // Keep track of previous node
                        prev = node
                        node = node.next
                    }

                    // Delete target node
                    prev.next = null
                    return true
                }
            }
        } else {
            return false
        }
    }

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

// console.log(test.get('John'))
// console.log(test.get('Carlos'))
// console.log(test.get('Malaysia'))
// console.log(test.get('kohn'))
// console.log(test.list)

// console.log(test.has('pablo'))
// console.log(test.remove('Carlos'))
// test.remove('John')
// test.remove('Malaysia')
console.log(test.list)
