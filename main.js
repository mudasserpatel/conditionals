//Coin Flip: Declaring variables
var userChoice = prompt("Heads or tails?");
var randomNumber = Math.round(Math.random());
var computerChoice;

//Coin Flip: Conditionals

    if(randomNumber == 0){
        computerChoice = "heads";
    }
    else {
        computerChoice = "tails";
    }
    if(userChoice == computerChoice){
        alert("You guessed right! The coin flip landed on " + computerChoice + ".");
    }
    else{
        alert("Sorry, the coin flip landed on " + computerChoice + ".");
    }

//Birth Year: Declaring variables
var birthYear = Number(prompt("What year were you born?"));

//Birth Year: Conditionals

    if(2024 - birthYear > 21){
        alert("You are old enough to drink in the US.");
    }
    else if(2024 - birthYear == 21){
        alert("You are old enough to drink in the US...barely.");
    }
    else{
        alert("Sorry, you are not old enough to drink in the US");
    }
