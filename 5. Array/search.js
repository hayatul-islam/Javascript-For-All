
// Search Data 

var arr = [3, 4, 8, 6, 0, 33, 66, 22]

// data found
var find = 33
var isFound = false
for(var i=0; i<arr.length; i++){
    if(arr[i] == find){
        console.log("Data found at index " + i)
        isFound = true;
        break;
    }
}
if(!isFound){ // condition check
    console.log("Data Not Found")
}

