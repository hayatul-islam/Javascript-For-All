
// google variable 
var a = 'abc'

if(true){
    if(true){
        if(true){
            console.log(a)
            var b = 'I am B'
        }
    }
}

console.log(b)

// function scope 
function x() {
    var a = 20
    function y() {
        // var a = 10
        console.log(a)
    }
    y()
    console.log(a)
}
x()


function test(n) {
    function a() {
        return n%3 == 0
    }
    function b() {
        return n%5 == 0
    }
    if(a() && b()){
        console.log(n + ' is divisible by both number')
    }else{
        console.log('Not a valid number')
    }
}
test(10)
test(15)
