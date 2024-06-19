# Hash Maps

![hashmap image](src/asset/hashmap-img.jpg)

A hashmap is a data structure in JavaScript that allows you to store key-value pairs. It provides fast access to values based on their keys and is commonly used to optimize
lookup operations.

# How does it work?

At its core, a HashMap is implemented using an array of fixed size, where each element in the array is called a bucket. Each bucket can store multiple key-value pairs. When you insert a new key-value pair into the HashMap, it calculates the hash code of the key and maps it to a specific bucket using a hash function.

The hash function takes the key and converts it into a numerical value. This numerical value is then used as an index to map the key-value pair to the corresponding bucket in the array. The goal of a good hash function is to distribute the key-value pairs evenly across the buckets, minimizing collisions.

## Collisions

Collisions occur when two or more keys map to the same bucket. To handle collisions, most HashMap implementations use a technique called chaining. Chaining involves storing multiple key-value pairs in the same bucket using a linked list or an array. When you need to retrieve a value based on a key, the HashMap first calculates the hash code of the key, determines the bucket, and then traverses the linked list or array in that bucket to find the matching key-value pair.

It’s important to note that the performance of a HashMap depends on the quality of the hash function and the number of collisions. A good hash function should distribute the key-value pairs evenly across the buckets to minimize collisions. If there are too many collisions, the performance of the HashMap may degrade.

For a more in-depth read about HashMaps in JavaScript, refer to this [website](https://www.squash.io/javascript-hashmap-a-complete-guide/)

## To test ouy my implementation of HashMaps in JavaScript

Run the following:

1. Fork and/or clone repo.
2. Run `npm install` to install all dependencies.
3. Run `nodemon ./src/hashMap.js` to run code using Node which will output in your editor's terminal.

# References

1. [The Odin Project](https://www.theodinproject.com/lessons/javascript-hashmap)
2. [JavaScript Hashmap: A Complete Guide](https://www.squash.io/javascript-hashmap-a-complete-guide/)
