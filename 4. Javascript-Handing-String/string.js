
var str = 'something' // string literal
var str = String('Something') // string constructor

var n = 10
var str = n + '' // string convert
var str = n.toString()
var str = String(n)
console.log(str)


// Escape Natation
var str = 'This is a \'String\''
var str = 'This is a \n String'
var str = 'This is a \t String'
var str = 'This is a \\ String'

console.log(str)

// Carriage Return - \r 
// Vertical Tab - \v 
// Backspace - \b 
// Form Feed - \f


// String Comparison

// Lexicographic
var a = 'aaaZ'
var b = 'aaaz'

console.log(a < b)

console.log('z' > 'Z')

console.log('001' == 1)


// String Concat
var a = 'I am'
var b = 'Hayatul Emon'
var c = a.concat(' ',b)
console.log(c)

// string substr
var d = c.substr(5)
var d = c.substr(5,7)
console.log(d)

// string charAt 
console.log(c.charAt(5))
console.log(c.charAt(8))

// string startsWith
console.log(c.startsWith('I'))
console.log(c.startsWith('I am'))

// string endsWith
console.log(c.endsWith('Emon'))
console.log(c.endsWith('Emon22'))

// Uppercase Lowercase
console.log(c.toUpperCase())
console.log(c.toLowerCase())

// space ignore
console.log('    adfdfd      '.trim())

// string split
console.log(c.split(' '))

// string length
var str = 'Some String'
console.log(str.charAt(7))
console.log(str.charAt(15)) //empty string
console.log(typeof str.charAt(16))

var length = 0
while(true){
    if(str.charAt(length) == ''){
        break
    }else{
        length++
    }
}
console.log(length)

console.log(str.length)
console.log('afkdfj;aldsf'.length)

// ******End******
