
// Constructor Pattern 

var Rectangle = function (width, height) {
    this.width = width
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
    }
}

var rect = new Rectangle(12,4)
rect.draw()
