var obj = {
    x: 40, 
    y: 60,
    z: 75
}

// find object property 
console.log('x' in obj) // in operator
console.log('p' in obj)

// for in loop 
for (var i in obj){
    console.log(i)
    console.log(i + ': ' + obj[i])
}
