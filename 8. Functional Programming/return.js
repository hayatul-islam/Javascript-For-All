// Return function 
// messages 
function greet(msg) {
    function greetings(name) {
        return msg + ', ' + name + '!'
    }

    return greetings
}

var gm = greet('Good Morning')
var msg = gm('Hayatul Emon')
console.log(msg)

var hello = greet('Hello')
var msg = hello('Hayatul Emon')
console.log(msg)

// power 
function base(b) {  
    return function (n) {
        var res = 1
        for(var i=0; i<b; i++){
            res *=n 
        }

        return res
    }
}

var base10 = base(10)
console.log(base10(2))

var base5 = base(5)
console.log(base5(2))
console.log(base5(3))

