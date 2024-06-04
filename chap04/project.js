//Chapter Project
//number Game
let val = prompt("What number?");
val = Number(val);
let num = 100;
let message = "nothing";
if (val > num) {
   message = val + "  was greater than " + num;
} else if (val === num) {
    message = val + "  was equal to " + num;
} else {
   message = val + " is less than " + num;
}
console.log(message);
console.log(message);

// Friend checker game
let person = prompt("enter a name");
let mes;
switch (person) {
   case "jean" :
   case "mary" :
   case "hannah" :
   case "josh" :
   mes = person + " is my friend";
   break;
   default :
   mes = "I don't know " + person;
}
console.log(mes);

// Rock Paper Scissors game
let myArr = ["Rock", "Paper", "Scissors"]; 
let computer = Math.floor(Math.random() * 3); 
let player = Math.floor(Math.random() * 3); 
let msg = "Ash: " + myArr[player] + " vs computer: " + 
myArr[computer] + " "; 
if (player === computer) { 
    msg += "-it's a tie"; 
} else if (player > computer) { 
    if (computer == 0 && player == 2) { 
        msg += "-computer wins"; 
    } else { 
        msg += "-Ash wins"; 
    } 
} else { 
    if (computer == 2 && player == 0) { 
        msg += "-Ash wins"; 
    } else {
        msg += "-computer wins"; 
    } 
} 
console.log(msg);