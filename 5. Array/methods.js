// array methods

var arr = [4, 5, 7, 3, 9]
var arr2 = [2, 6, 4, 8, 6]

// join method
console.log(arr.join(', '))
console.log(arr.join(' | '))

// fill method
console.log(arr.fill(0))
console.log(arr.fill(true))

var arr = [4, 5, 7, 3, 9]
var arr2 = [2, 6, 4, 8, 6]

// concat method 
var arr3 = arr.concat(arr2)
console.log(arr3)

// isArray method 
console.log(Array.isArray(arr))
console.log(Array.isArray([3, 5, 6]))

// from method 
var arr4 = Array.from(arr)
console.log(arr4)