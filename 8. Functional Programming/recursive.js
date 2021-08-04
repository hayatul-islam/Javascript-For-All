
// Recursive Function 

function sayHi(n) {
    if(n == 0){
        return
    }
    console.log('Hi, I am Calling!')
    sayHi(n - 1)
}

sayHi(10)

// number sum
function sum(n) {
    if(n == 1){
        return 1
    }
    return n + sum(n-1)
}
console.log(sum(10))

// factorial 
function fact(n) {
    if(n == 1){
        return 1
    }

    return n * fact(n - 1)
}
console.log(fact(5))

var arr1 = [1, 2, 3, 4, 5]

// array sum 
function sumOfArray(arr, lastIndex) {
    if(lastIndex < 0){
        return 0
    }

    return arr[lastIndex] + sumOfArray(arr, lastIndex - 1)
}
console.log(sumOfArray(arr1, arr1.length - 1))
