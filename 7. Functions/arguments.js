
// function add 
function add (a, b){ // parameter (a, b)
    var result = a + b
    console.log(result)
}

add(10, 20) // argument (10, 20)
add(7, 3)

// sub
function sub (a, b){
    var result = a - b
    console.log(result)
}

sub(20, 10)
sub(200, 100)

// Sum of Array 
var arr1 = [1, 2, 3]
var arr2 = [4, 5, 6]
var arr3 = [7, 8, 9]

function sumOfArray (arr) {
    var sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];        
    }
    console.log(sum)
}
sumOfArray(arr1) // argument (arr1)
sumOfArray(arr2)
sumOfArray(arr3)

// arguments object 
// empty 
function test(a, b, c) {
    console.log(arguments)
}
test()
function test1(a, b, c) {
    console.log(JSON.stringify(arguments))
    // console.log(typeof a)
}
test1()

function test1(a, b, c) {
    console.log(arguments)
    // console.log(typeof a)
}
test1(10, 20, 30)

// see the values within parameters
function test2(a, b, c) {
    for(var i=0; i<arguments.length; i++){
        console.log(arguments[i])
    }
}
test2(10, 20, 30)

// without parameters 
function test3() {
    for(var i=0; i<arguments.length; i++){
        console.log(arguments[i])
    }
}
test3(10, 20, 30)

// additional function 
function addAll() {
    var sum = 0
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i]        
    }
    console.log(sum)
}

addAll(1, 2, 3)
addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)