
// Abstraction 
var Rectangle = function (width, height) {

    this.width = width
    this.height = height

    var position = { 
        x: 40,
        y: -30
    }

    var printProperties = function () {
        console.log('My width is ' + this.width)
        console.log('My Height is ' + this.height)
    }.bind(this)

    // position seen
    // this.getPosition = function () {
    //     return position
    // }

    this.draw = function () {
        console.log('I am a rectangle')
            
        printProperties()
        console.log('position: X=' + position.x + ' ' + 'Y=' + position.y) 
    }

    // getter & setter
    Object.defineProperty(this, 'position', {
        get: function () {
            return position
        },

        set: function (value) {
            position = value
        }
    })
}

var rect = new Rectangle(12, 4)
rect.draw()

rect.position = {
    x: 444,
    y: 333
}
// console.log(rect.getPosition())
console.log(rect.position)
