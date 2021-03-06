
// Reduce Function 
var arr = [1, 2, 3, 4, 5]

// sum reduce 
var sum = arr.reduce(function (prev, curr) {
    return prev + curr
})
console.log(sum)

var sum = arr.reduce(function (prev, curr) {
    return prev + curr
}, 100) // initialize
console.log(sum)

// max value 
var max = arr.reduce(function (prev, curr) {
    return Math.max(prev, curr)
}, 0)
console.log(max)

// generate reduce 
function myReduce(arr, cb, acc) {
    for(var i=0; i<arr.length; i++){
        acc = cb(acc, arr[i])
    }

    return acc
}

// sum 
var sum = myReduce(arr, function (prev, curr) {
    return prev + curr
}, 0)
console.log(sum)

// min value
var min = myReduce(arr, function (prev, curr) {
    return Math.min(prev, curr)
}, arr[0])
console.log(min)
