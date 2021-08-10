// ***********Factory Pattern**********
var createRect = function (width, height) {
    return {
        width: width,
        height: height,
    
        // methods 
        draw: function () {
            console.log('I am a rectangle')
                
            this.printProperties()
    
            console.log(this) // same object ref
        },
    
        printProperties: function () {
            console.log('My width is ' + this.width)
            console.log('My Height is ' + this.height)
        }
    }
}

var rect1 = createRect(10, 8);
rect1.draw()

var rect2 = createRect(40, 18);
rect2.draw()
