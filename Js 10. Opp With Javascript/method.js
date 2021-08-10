
// methods 

// function myFunc() {
    function myFunc(c, d) {
        console.log(this)
        // console.log(this.a + this.b)
        console.log(this.a + this.b + c + d)
    }
    myFunc()
    
    // call method
    // myFunc.call({a: 40, b: 15}) 
    myFunc.call({a: 400, b: 15,}, 5, 6)
    
    // apply method
    // myFunc.apply({a: 200, b: 100}) 
    myFunc.apply({a: 200, b: 100},[10, 5]) 
    
    // bind method 
    var testBind = myFunc.bind({a: 7, b: 3}, 5, 5)
    testBind()
    
    var testBind2 = myFunc.bind({a: 7, b: 3})
    testBind2(5, 7)