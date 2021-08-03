// First Class Function 

function add(a, b) {
    return a + b
}

// 1. A function can be stored in  variable 
var sum = add 
console.log(sum(4, 5))
console.log(typeof sum)

// 2. A function can be stored in  Array
var arr = []
arr.push(add)
console.log(arr)
console.log(arr[0](5, 6))

// 3. A function can be stored in Object
 var obj = {
     sum: add
 }
console.log(obj)
console.log(obj.sum(3, 4))

// 4. We can Create Function as Need 
setTimeout(function () {
    console.log('I have created...')
}, 100)


