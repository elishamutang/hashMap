import HashMap from './hashMap.js'

const test = new HashMap()

// The data below will populate the hashmap where it will exceed the load factor.
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
test.set('moon', 'silver')

// Hash map capacity at is at full capacity now (0.75), running the below will test whether it will overwrite the hash map correctly.
// test.set('lion', 'roar')
// test.set('hat', 'red')

// Test 1: Replace value for an existing key
// test.set('moon', 'bright')
// test.set('ice cream', 'melting')
// test.set('lion', 'roar')

// Test 2: Has method
// console.log(test.has('moon'))
// console.log(test.has('ice cream'))
// console.log(test.has('lion'))
// console.log(test.has('test'))

// Test 3: Remove method and check whether list is updated by calling has, get, length, keys, values, entries.
// test.remove('moon')
// test.remove('ice cream')
// test.remove('lion')
// console.log(test.has('lion'))

console.log(test.keys())
console.log(test.values())
console.log(test.entries())

console.log(test.list)
console.log(test.capacity)
console.log(test.length())

// Below is 2nd set of data that will exceed load factor and expand the hash map.

// test.set('nest', 'brown')
// test.set('orange', 'orange')
// test.set('penguin', 'black and white')
// test.set('quilt', 'patchwork')
// test.set('rabbit', 'gray')
// test.set('sun', 'yellow')
// test.set('tree', 'green')
// test.set('book', 'novel')
// test.set('chair', 'comfortable')
// test.set('desk', 'wooden')
// test.set('eagle', 'majestic')
// test.set('flower', 'fragrant')
// test.set('guitar', 'acoustic')
// test.set('hammer', 'heavy')
// test.set('island', 'tropical')
// test.set('jungle', 'dense')
// test.set('key', 'metallic')
// test.set('lamp', 'bright')
// test.set('mango', 'juicy')
// test.set('notebook', 'spiral-bound')
// test.set('ocean', 'vast')
// test.set('piano', 'grand')
// test.set('queen', 'regal')
// test.set('river', 'meandering')
// test.set('ship', 'sailing')
// test.set('tiger', 'striped')
// test.set('umbrella', 'waterproof')
