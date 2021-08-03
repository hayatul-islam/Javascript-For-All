
// Filter Function 
var arr = [3, 4, 5, 2, 9, 3, 8, 6] 

// even number filter 
var filterArr = arr.filter(function (value) {
    return value % 2 == 0
})
console.log(filterArr)

// odd number filter 
var filterArr = arr.filter(function (value) {
    return value % 2 == 1
})
console.log(filterArr)

// generate filter function 
function myFilter(arr, cb) {
    var newArr = []
    for(var i=0; i<arr.length; i++){
        if(cb(arr[i], i, arr)){
            newArr.push(arr[i])
        }
    }

    return newArr
}

// greater than by 6 filter 
console.log(myFilter(arr, function (value) {
    return value > 6
}))