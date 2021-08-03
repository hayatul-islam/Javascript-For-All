
// For Each 

var arr = [1, 2, 3, 4, 5]
arr.forEach(function (value, index, arr) {
    console.log(value, index, arr)
})

// array sum 
var sum = 0
arr.forEach(function (value, index, arr) {
    sum += value 
})
console.log(sum)

// array sum details 
function forEach(arr, cb) {
    for(var i=0; i<arr.length; i++){
        // cb(arr[i])
        // cb(arr[i], i)
        cb(arr[i], i, arr)
    }
}
var sum = 0
forEach(arr, function (value, index, arr) {
    console.log(value, index, arr)
    sum += value
})
console.log(sum)

// array value increase 5 
forEach(arr, function (value, index, arr) {
    arr[index] = value + 5
})
console.log(arr)