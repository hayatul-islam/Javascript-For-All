
var obj = {}
obj.x = 10
console.log(obj)

// Objects literal
var point = {
    x: 10,
    y: 20
}
point.z = 30 // add 

console.log(point)

// Objects constructors 
var obj = Object()
obj.a = 10
console.log(obj)

var obj2 = new Object()
obj2.b = 20
console.log(obj2)


var point = {
    x: 10,
    y: 20,
    z: 15
}

// Objects excess dot notation
console.log(point.x)
console.log(point.x + point.z)

// Objects excess array notation
console.log(point['x'])
console.log(point['x'] + point['y'])

