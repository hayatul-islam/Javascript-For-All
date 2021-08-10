
// Function are object in Javascript

function test() {
    console.log('Something')
}
console.log(test.name, test.length)

var Rect = new Function('width', 'height', `this.width = width
    this.height = height

    // methods 
    this.draw = function () {
        console.log('I am a rectangle')
            
        this.printProperties()

        console.log(this) 
    }

    this.printProperties = function () {
        console.log('My width is ' + this.width)
        console.log('My Height is ' + this.height)
    }`
)

var rect5 = new Rect(4, 5)
console.log(rect5)