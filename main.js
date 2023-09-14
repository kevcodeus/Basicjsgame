let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');
let number = [Math.floor(Math.random()*100)+1]

btn.addEventListener('click', function(){
    let input =document.getElementById('userinput').value;
    if(input==number){
        output.innerHTML = `Your Guess Was Right! The Number is ${number}`;
    }
    else if(input<number){
        output.innerHTML = "You guessed is too low!";
    } else if(input>number){
        output.innerHTML = "You guessed is too high!";
    }
})