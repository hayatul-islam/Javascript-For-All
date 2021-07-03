// for loops

// for (initializer, condition, increment){
//
// }

// 1 to 100
for(var i = 0; i < 100; i++){
    console.log((i+1),'Hayatul Emon')
}

// 100 to 1
for(var i = 100; i > 0; i--){
    console.log(i,'Hayatul Emon')
}

// 1 to 100
for (var i = 1; i<= 100; i++){
    console.log(i)
}

// Even number 
for(var i = 1; i <= 10; i++){
    if(i % 2 == 0){
        console.log(i)
    }
}

// Odd number
for (var i = 1; i <= 10; i++){
    if (i % 2 == 1){
        console.log(i)
    }
}


// sum
var sum = 0
for(var i = 1; i <= 10; i++){
    sum += i
    console.log(sum)
}

var sum = 0
for(var i = 1; i <= 10; i++){
    console.log(sum + ' + ' + i + ' = ' + (sum+i))
    sum += i
}

// even number sum
var sum = 0
for(var i = 1; i <= 10; i++){
    if(i%2==0){
        console.log(sum + ' + ' + i + ' = ' + (sum + i))
        sum += i
    }
}