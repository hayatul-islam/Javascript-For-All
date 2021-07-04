

// infinity for loop

for(; ;){
    var rand = Math.round(Math.random() * 10)
    if(rand == 7){
        console.log("Winner Winner Chicken Dinner")
        break
    }else{
        console.log("You have got " + rand)
    }
}