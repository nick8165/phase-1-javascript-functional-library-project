const myEach = function (collection, callback) {
    let array = Object.values(collection)
    for (const element of array) {
        callback(element)
    }
    return collection
}

const myMap = function (collection, callback) {
    let array = Object.values(collection)
    let map1 = array.map(callback)
    return map1
}

const myReduce = function (collection, callback, acc) {
    let array = Object.values(collection)
    let sum = (acc === undefined) ? array.reduce(callback) : array.reduce(callback, acc)
    return sum
}

const myFind = function (collection, predicate) {
    let array = Object.values(collection)
    let find = array.find(predicate)
    return find
}

const myFilter = function (collection, predicate) {
    let array = Object.values(collection)
    let find = array.filter(predicate)
    return find
} 

const mySize = function (collection) {
    let array = Object.keys(collection)
    return array.length
}

const myFirst = function (array, n) {
    let num = (n === undefined) ? array[0] : array.slice(0, n)
    return num
}

const myLast = function (array, n) {
    let size = array.length
    let negSize = n * -1
    let num = (n === undefined) ? array[size - 1] : array.slice(negSize)
    return num
}

const myKeys = function (object) {
    let array = Object.keys(object)
    return array
}

const myValues = function (object) {
    let array = Object.values(object)
    return array
}