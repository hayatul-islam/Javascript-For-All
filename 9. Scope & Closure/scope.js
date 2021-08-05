

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