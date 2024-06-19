import { getKey, getValue, getEntry } from './helperFunc.js'

class Node {
    constructor(key = null, value = null, next = null) {
        return {
            [key]: value,
            next,
        }
    }
}

export default class HashMap {
    constructor() {
        this.list = new Array(16)
        this.loadFactor = 0.75
        this.capacity = 0
    }

    hash(key) {
        let hashCode = 0
        let listSize = this.list.length

        const primeNumber = 31
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % listSize
        }

        return hashCode
    }

    set(key, value) {
        let keyHash = this.hash(key)
        let newNode = new Node(key, value)

        // For the incoming {key: value} pair, if the hash code (or index) contains an existing value,
        // check if passed key exists, else insert at index (keyHash).
        if (this.list[keyHash]) {
            let tmp = this.list[keyHash]

            // Check if key that was passed, already exists in list. If true, overwrite the value of that key.
            // Else, traverse through the linked list and insert as next node.
            if (tmp[key]) {
                tmp[key] = value
            } else {
                while (tmp.next !== null && !tmp[key]) {
                    tmp = tmp.next
                }

                if (tmp[key]) {
                    tmp[key] = value
                } else {
                    tmp.next = newNode
                }
            }
        } else {
            this.list[keyHash] = newNode
        }

        // Keep track of hash map capacity.
        this.capacity = this.length() / this.list.length

        // If capacity exceeds load factor, create a new list double the size of existing list and then
        // copy over all keys from old list into new list.
        // Hashing function is updated to reflect new size of hash map.
        if (this.capacity > this.loadFactor) {
            let newList = new Array(this.list.length * 2)

            let oldList = this.list
            this.list = newList

            let allEntries = []

            for (let node of oldList) {
                if (node) {
                    getEntry(node, allEntries)
                }
            }

            allEntries.forEach((entry) => {
                this.set(entry[0], entry[1])
            })
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
        let keyHash = this.hash(key)
        let tmp = this.list[keyHash]

        // If key is present at head, return true. Else, traverse through node and find key.
        if (tmp[key]) {
            return true
        } else {
            if (tmp.next === null) {
                return false
            } else {
                while (tmp.next !== null) {
                    tmp = tmp.next
                }

                if (tmp[key]) return true
            }

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
                delete tmp[keyHash]

                this.capacity = this.length() / this.list.length

                return true
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
                    this.capacity = this.length() / this.list.length
                    return true
                }
            }
        } else {
            return false
        }
    }

    length() {
        let tmp = this.list

        let counter = 0

        for (let node of tmp) {
            if (node) {
                counter++
                while (node.next !== null) {
                    counter++
                    node = node.next
                }
            }
        }

        return counter
    }

    clear() {
        this.list = new Array(16)
        this.capacity = 0
    }

    keys() {
        let tmp = this.list
        let allKeys = []

        // Loop through each node in bucket.
        for (let node of tmp) {
            if (node) {
                getKey(node, allKeys)
            }
        }

        return allKeys
    }

    values() {
        let tmp = this.list
        let allValues = []

        for (let node of tmp) {
            if (node) {
                getValue(node, allValues)
            }
        }

        return allValues
    }

    entries() {
        let tmp = this.list
        let allEntries = []

        for (let node of tmp) {
            if (node) {
                getEntry(node, allEntries)
            }
        }

        return allEntries
    }
}
