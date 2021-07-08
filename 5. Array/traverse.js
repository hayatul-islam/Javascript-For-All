
// Traverse an Array

var arr = [4, 5, 6, 3, 2, 9]

// arr[0]
// arr[1]
// arr[2]
// arr[3]
// arr[arr.length - 1] // last index

// array traversing
for (var i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element)
}

// i + 2
for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + 2  
}
console.log(arr)

// array sum 
var sum = 0
for(var i = 0; i < arr.length; i++){
    sum += arr[i]
}
console.log(sum)

// // even number
// for(var i = 0; i < arr.length; i++){
//     if(arr[i] % 2 == 0){
//         console.log(arr[i])
//     }
// }

// // odd number
// for(var i = 0; i < arr.length; i++){
//     if(arr[i] % 2 == 1){
//         console.log(arr[i])
//     }
// }

console.log("\n")

var arr = [3, 4, 6, 8, 5, 9, 1, 2]

// even numbers sum
var sum = 0
for(var i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
        sum += arr[i]
    }
}
console.log(sum)

// odd numbers sum
var sum = 0
for(var i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 1){
        sum += arr[i]
    }
}
console.log(sum)
