
// Curring Function 

function add(a, b, c) {
    return a + b + c
}
console.log(add(4,5,6))

// curring 
function curring(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}

var result = curring(4)(5)(6)
console.log(result)

