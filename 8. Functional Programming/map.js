// Map function 
var arr = [1, 2, 3]

// random array make
var random = arr.map(function (value) {
    return Math.random() * 100
})
console.log(arr)
console.log(random)

// square array make 
var sqrArr = arr.map(function (value) {
    return value * value
})
console.log(arr)
console.log(sqrArr)


//  map generate 
function myMap(arr, cb) {
    var newArr = []
    for(var i=0; i<arr.length; i++){
        var temp = cb(arr[i], i, arr)
        newArr.push(temp)
    }
    return newArr
}

// qube in array
var qb = myMap(arr, function (value) {
    return value * value * value
})
console.log(qb)

// multiply in array 
var mten = myMap(arr, function (value) {
    return value * 10
})
console.log(mten)
