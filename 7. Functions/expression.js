// function expression 

// anonymous function 
var additional = function (a, b) {
    return a + b
}
console.log(additional(10, 20))

setTimeout(function () {
    console.log('I will call after 5 second')
}, 5000)

var another = additional
console.log(another)
console.log(another(7, 8))