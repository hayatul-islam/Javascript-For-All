
// Execution Context 

function a() {
    b()
    console.log('I am Function A')
}
function b() {
    d()
    console.log('I am Function B')
}
function c() {
    console.log('I am Function C')
}
function d() {
    c()
    console.log('I am Function D')
}

var x //creational phase
x = 100 // execution phase
a()
console.log('I am Global')

// Execution of C Function context 
// Execution of D Function context 
// Execution of B Function context 
// Execution of A Function context 
// Execution of global context 


// Creational Phase 
// Executional Phase
