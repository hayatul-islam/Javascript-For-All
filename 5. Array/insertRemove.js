
// Insert & Remove Element

var arr = [1, 2, 3, 4, 5, 6, 7, 8]

// arr[3] = 9

// insert
arr.push(9)
arr.unshift(9)
console.log(arr)

// splice insert
arr.splice(3, 0, 9, 10)
console.log(arr)

// Remove 
// arr[3] = undefined
arr.pop() // last
arr.shift() // first

// splice remove 
arr.splice(3, 1)
arr.splice(3, 1, 44) 
console.log(arr)
