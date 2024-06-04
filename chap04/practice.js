// Practice exercise 4.1
// let boo = false;
// console.log(boo);
// if (!boo) {
//     console.log("it is true")
// }
// if (boo) {
//     console.log("false now");
// }

// Practice exercise 4.2
// let age = prompt("How old are you?");
// age = Number(age);
// let response;
// if (age >= 18) {
//     response = "You can enter the ferris wheel.";
// } else if (age >= 16) {
//     response = "You can enter but with a companion over 18.";
// } else {
//     response = "You are not allowed in!";
// }
// console.log(response);

// Practice exercise 4.3
// let id = false;
// let message = (id) ? "Allowed In" : "Denied Entry";
// console.log(message);

// Practice exercise 4.4
// let randomNumber = Math.floor(Math.random() * 6);
// let answer = "Something went wrong";
// let question = prompt("Ask me anything");
// switch (randomNumber) {
//     case 0:
//         answer = "YOLO";
//         break;
//     case 1:
//         answer = "keep smiling always";
//         break;
//     case 2:
//         answer = "life is hard, you need to be harder";
//         break;
//     case 3:
//         answer = "never give up on what doesn't give up on you";
//         break;
//     default:
//         answer = "life is sour like lemon, why not turn it into a lemonade";
//         break;
// }
// let output = "You asked me " + question + ". I think that " + answer;
// console.log(output);

//Practice 4.5
// let prize = prompt("pick a number 0-10");
// prize = Number(prize);
// let output = "my selection: ";
// switch (prize){
//    case 0: 
//        output += "Big ";
//    case 1:
//        output += "Cheque Prize ";
//        break;
//    case 2:
//        output += "Massive ";
//    case 3:
//        output += "Box of ";
//    case 4:
//        output += "Gold ";
//    case 5:
//        output += "Bars ";
//        break;
//    default:
//        output += "Sorry Try Again";
// }
// console.log(output);

//Chapter Project
//number Game
// let val = prompt("What number?");
// val = Number(val);
// let num = 100;
// let message = "nothing";
// if (val > num) {
//    message = val + "  was greater than " + num;
// } else if (val === num) {
//     message = val + "  was equal to " + num;
// } else {
//    message = val + " is less than " + num;
// }
// console.log(message);

// Friend checker game
// let person = prompt("enter a name");
// let message;
// switch (person) {
//    case "jean" :
//    case "mary" :
//    case "hannah" :
//    case "josh" :
//    message = person + " is my friend";
//    break;
//    default :
//    message = "I don't know " + person;
// }
// console.log(message);

// Rock Paper Scissors game
const myArr = ["Rock", "Paper", "Scissors"]; 
let computer = Math.floor(Math.random() * 3); 
let player = Math.floor(Math.random() * 3); 
let message = "Ash: " + myArr[player] + " vs computer: " + 
myArr[computer] + " "; 
if (player === computer) { 
    message += "-it's a tie"; 
} else if (player > computer) { 
    if (computer == 0 && player == 2) { 
        message += "-computer wins"; 
    } else { 
        message += "-Ash wins"; 
    } 
} else { 
    if (computer == 2 && player == 0) { 
        message += "-Ash wins"; 
    } else {
        message += "-computer wins"; 
    } 
} 
console.log(message);

//Self-check quiz
// 1.
// const q = '1';
// switch (q) {
// case '1':
//        answer = "one";
//        break;
//        case 1:
//            answer = 1;
//            break;
//        case 2:
//            answer = "this is the one";
//            break;
//        default:
//            answer = "not working";
//     }
//     console.log(answer);
//     //answer 'one'
2. 
// const q = 1;
// switch (q) {
//     case '1':
//         answer = "one";
//     case 1:
//         answer = 1;
//     case 2:
//         answer = "this is the one";
//         break;
//     default:
//         answer = "not working";
//  }
//  console.log(answer);
//  //answer 'this is the one'
3.
// let login = false;
// let outputHolder = "";
// let userOkay = login ? outputHolder = "logout" : outputHolder = 
// "login";
// console.log(userOkay);
// //answer = 'login'
4.
// const userNames = ["Mike", "John", "Larry"];
// const userInput = "John";
// let htmlOutput = "";
// if (userNames.indexOf(userInput) > -1) {
//    htmlOutput = "Welcome, that is a user";
// } else {
//     htmlOutput = "Denied, not a user ";
//  }
//  console.log(htmlOutput + ": " + userInput);
// //answer = 'Welcome, that is a user: John'
5.
// let myTime = 9;
// let output;
// if (myTime >= 8 && myTime < 12) {
//    output = "Wake up, it's morning";
// } else if (myTime >= 12 && myTime < 13) {
//    output = "Go to lunch";
// } else if (myTime >= 13 && myTime <= 16) {
//    output = "Go to work";
// } else if (myTime > 16 && myTime < 20) {
//    output = "Dinner time";
// } else if (myTime >= 22) {
//    output = "Time to go to sleep";
// } else {
//    output = "You should be sleeping";
// }
// console.log(output);
// //answer = 'Wake up, it's morning'
6.
// let a = 5;
// let b = 10;
// let c = 20;
// let d = 30;
// console.log(a > b || b > a);//answer = true
// console.log(a > b && b > a);//answer = false
// console.log(d > b || b > a);//answer = true
// console.log(d > b && b > a);//answer = true
7.
// let val = 100;
// let message = (val > 100) ? `${val} was greater than 100` : 
// `${val} was LESS or Equal to 100`;
// console.log(message);
// let check = (val % 2) ? `Odd` : `Even`;
// check = `${val} is ${check}`;
// console.log(check);
//answer = 100 was Less or EWqual to 100
//answer = 100 is even

    

