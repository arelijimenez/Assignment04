let userChooice;

while(true) {
    userChoice = prompt('What do you want to choose: Rock, Paper, or Scissors?');
    if(userChoice === "Rock" || userChoice === "Paper" || userChoice === "Scissors") {
      break;  
    }
}

let computerChoice = Math.random();
if (computerChoice === 0) {
    computerChoice = "Rock";
}
else if (computerChoice === 1) {
    computerChoice = "Paper";
}
else {
    computerChoice = "Scissors";
}

console.log("User Choice: " + userChoice);
console.log("Computer Choice: " + computerChoice);

let compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        alert("The result is tie !")
        return "The result is tie!";
    }
    else if (choice1 === 'Rock') {
        if (choice2 === 'Scissors'){
            alert("Rock wins, Rock Destroy Scissors !")
            return "Rock wins, Rock Destroy Scissors !";
        }
        else if (choice2 === 'Paper') {
            alert("Paper wins, Paper covers rock !")
            return "Paper wins, Paper covers rock !";
        } 
        
    }
    else if (choice1 === 'Paper') {
        if(choice2 === "Scissors") {
            alert("Scissors wins, Scissors cut paper. !")
            return "Scissors wins, Scissors cut paper. !";
        }
        else if (choice2 === 'Rock') {
            alert("Paper wins, Paper covers rock. !")
            return "Paper wins, Paper covers rock. !";
        }
    }
    else if (choice1 === "Scissors") {
        if (choice2 === "Paper") {
            alert("Scissors wins, Scissors cut paper.!")
            return "Scissors wins, Scissors cut paper. !";
        }
        else if (choice2 === "Rock") {
            alert("Rock wins, Rock Destroy Scissors !")
            return "Rock wins, Rock Destroy Scissors !";
        }
    }
}
console.log("The comparison's result is: " + compare(userChoice, computerChoice));