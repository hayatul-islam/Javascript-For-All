
var arr = [3, 4, 7, 2, 9, 6, 8]

// array find 
var arrFind = arr.find(function (value) {
    return value == 9
})
console.log(arrFind)

// array findIndex
var arrFindIndex = arr.findIndex(function (value) {
    return value == 9
})
console.log(arrFindIndex)

// generate find function 
function myFind(arr, cb) {
    for(var i=0; i<arr.length; i++){
        if(cb(arr[i])){
            // return arr[i] // find 
            return i // find index
        }
    }
}

var result = myFind(arr, function (value) {
    return value == 7
})
console.log(result)