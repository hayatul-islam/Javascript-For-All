
var persons = [
    {
        name: 'A',
        age: 21
    },
    {
        name: 'B',
        age: 19
    },
    {
        name: 'C',
        age: 25
    },
    {
        name: 'D',
        age: 22
    }
]

// object sort 
persons.sort()
console.log(persons)

// age object sort 
persons.sort(function (a, b) {
    if(a.age > b.age){
        return 1
    }else if(a.age < b.age){
        return -1
    }else{
        return 0
    }
})
console.log(persons)

var arr = [4, 5, 6, -4, -2, -7, 0, 2, 9, 1, 4, 9, 7] 

// negative value not working
arr.sort()
console.log(arr)

// negative value working 
arr.sort(function (a, b) {
    if(a > b){
        // return 1
        return -1 // descending order
    }else if(a < b){
        // return -1
        return 1 // descending order
    }else{
        return 0
    }
})
console.log(arr)

var arr = [4, 5, 6, 0, 2, 9, 1, 4, 9, 7, -3] 

// Every Methods 
// every number even
var res1 = arr.every(function (value) {
    return value % 2 == 0 
})
console.log(res1)

// every number positive
var res2 = arr.every(function (value) {
    return value >= 0
})
console.log(res2)

// Some Methods 
// one odd number 
var res3 = arr.some(function (value) {
    return value % 2 == 1
})
console.log(res2)

// one negative number 
var res4 = arr.some(function (value) {
    return value < 0
})
console.log(res4)
