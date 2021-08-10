
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

    this.draw = function () {
        console.log('I am a rectangle')
            
        printProperties()
        console.log('position: X=' + position.x + ' ' + 'Y=' + position.y) 
    }
}

var rect = new Rectangle(12, 4)
rect.draw()

