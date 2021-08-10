
// pass by value vs pass by reference
// call by value vs call by reference

// pass by value
var n = 10
function change(n) {
    n = n + 100
    console.log(n)
}

change(n)
console.log(n)

// pass by reference
var obj = {
    a: 10,
    b: 20
}

function changeMe(obj) {
    obj.a += 100
    obj.b += 100 
    console.log(obj)
}

changeMe(obj)
console.log(obj)