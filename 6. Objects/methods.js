var obj = {
    x: 40, 
    y: 60,
    z: 75
}

// keys method
console.log(Object.keys(obj))

// values method
console.log(Object.values(obj))

// entries method 
console.log(Object.entries(obj))

// not solution way
// var obj2 = obj
// obj2.x = 70
// obj2.y = 100
// console.log(obj)
// console.log(obj2)

// new object assign method 
var obj2 = Object.assign({}, obj)
obj2.x = 100
console.log(obj)
console.log(obj2)