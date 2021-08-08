

const greetings = 'Hello World';

// string reverse 
function reverseString(text){
    let reverse = '';
    for(const letter of text){
       reverse = letter + reverse;
    }
    return reverse;
}

console.log(reverseString(greetings))


