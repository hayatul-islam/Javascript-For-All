
// Pure Function 
// It Returns the same result if given tha same arguments
// It does not cause any observable side effects

// pure function 
function sqr(n) {
    return n*n
}
console.log(sqr(3))

// not pure function 
var n = 10
function change() {
    n = 100
}
change()
console.log(n)

// not pure function 
var point = {
    x: 50,
    y: 60
}
function printPoint(point) {
    point.x = 100
    point.y = 200
    console.log(point)
}
printPoint(point)
console.log(point)