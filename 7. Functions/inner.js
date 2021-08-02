
// Inner function 
function something(greet, name) {
    function sayHi() {
        console.log(greet, name)
    }
    sayHi()
}
something('Good Morning,', 'Hayatul Emon')

// return first name 
function something1(greet, name) {
    function getFirstName() {
        if(name){
            return name.split(' ')[0]
        }
    }
    var message = greet + ' ' + getFirstName()
    console.log(message)
}
something1('Good Morning,', 'Hayatul Emon')
