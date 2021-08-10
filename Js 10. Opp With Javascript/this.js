
// object literal 

// ************ this **************
var rect = {
    width: 100,
    height: 50,

    // methods 
    draw: function () {
        console.log('I am a rectangle')
        // console.log('My width is ' + this.width)
        // console.log('My Height is ' + this.height)

        this.printProperties()

        console.log(this) // same object ref
    },

    printProperties: function () {
        console.log('My width is ' + this.width)
        console.log('My Height is ' + this.height)
    }
}

rect.draw()

rect.height = 100; // update

rect.draw()


// this keyword 
function myFunc() {
    console.log(this) 
}

myFunc() // window object
new myFunc() // empty object


var another = {
    width: 47,
    height: 56,
    print: rect.printProperties
}

console.log(another.print)
another.print()

