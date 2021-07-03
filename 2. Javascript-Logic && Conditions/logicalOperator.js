
// logical operators
// && || ! 


var a = 50
var b = 20
var c = 30 
var d = 40

// A && B 
// true && true = true
// true && false = false
// false && false = false

if (a > b  && c > d){
    console.log("A is greater than B and C id grater than D")
}else{
    console.log("At least one condition is false")
}

// A || B
// true || true = true
// true || false = true
// false || false = false

if (a > b  || c > d){
    console.log("A is greater than B Or C id grater than D")
}else{
    console.log("At least one condition is false")
}

// not operation
var check = !(a > b)
console.log(check)