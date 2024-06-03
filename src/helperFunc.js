// Helper functions

export const getKey = (node, allKeys) => {
    const [nodeKey] = Object.keys(node).filter((key) => {
        return key !== 'next'
    })

    allKeys.push(nodeKey)

    if (node.next !== null) {
        getKey(node.next, allKeys)
    }

    return allKeys
}

export const getValue = (node, allValues) => {
    const [nodeValue] = Object.values(node).filter((value) => {
        return value !== null
    })

    allValues.push(nodeValue)

    if (node.next !== null) {
        getValue(node.next, allValues)
    }

    return allValues
}

export const getEntry = (node, allEntries) => {
    const [entry] = Object.entries(node).filter(([key, value]) => {
        if (key !== 'next') {
            return [key, value]
        }
    })

    allEntries.push(entry)

    if (node.next !== null) {
        getEntry(node.next, allEntries)
    }

    return allEntries
}
