
// function add 
function add (a, b){ // parameter (a, b)
    var result = a + b
    console.log(result)
}

add(10, 20) // argument (add)
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
sumOfArray(arr1)
sumOfArray(arr2)
sumOfArray(arr3)
