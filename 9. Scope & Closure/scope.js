

{
    // scope 
    var x = 55

    function test() {
        // var x = 44
        console.log(x)
    }

    test()

    // nested scope 
    function scope() {
        var x =33
        console.log(x)

        function nested() {
            var y = 66
            console.log(x)
        }

        // console.log(y)
        nested()
    }

    scope()
}

// testing scope 
var a = 11

function A() {
    var b = 12
    function B() {
        var c = 23
        console.log(c)
    }

    function C() {
        var d = 56
        console.log(d)
    }
    console.log(b)
    D()
    B()
    C()
}
function D(n) {
    return n + a
}

// scope chain
// A >> a,b,c,d B(), C(), D()
// B >> a,b,c B(), C(), D()
// C >> a,b,d B(), C(), D()
// D >> a, n, A()