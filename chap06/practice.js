// Practice exercise 6.1
// function add(x, y) {
//     return (x + y);
// }
// let num1 = 10;
// let num2 = 20;
// console.log(add(num1, num2));
// console.log(add(20, 30));

// // Practice exercise 6.2
// let words = ["nice", "wonderful", "amazing", "kind", "delicious"];

// function mwords() {
//     let ask = prompt("What is your name?");
//     let nameAdj = Math.floor(Math.random() * words.length);
//     console.log(words[nameAdj] + " " + ask);
// }
// mwords();

// Practice exercise 6.3
// let var1 = 10;
// let var2 = 5;
// let oper = "+";
// function retrieve(x, y, op) {
//  if (op == "-") {
//    console.log(x - y);
//  } else {
//     console.log(x + y);
//  }
// }
// retrieve(var1, var2, oper);

// Practice exercise 6.4
// let mArr = [];
// for(let i = 0; i < 10; i++){
//   let val1 = 5 * i;
//   let val2 = i * i;
//   let res = cal(val1, val2, "+");
//   mArr.push(res);
//  }
//  console.log(mArr);
//  function cal(x, y, op) {
//   if (op == "-") {
//     return (x - y);
//   } else {
//     return (x + y);
//   }
//  }

// Practice exercise 6.5
// let var1 = "1000";
// (function () {
//    let var1 = "100";
//    console.log(var1);
// })();
// let result = (function () {
//    let var1 = "Kuhle";
//    return (var1);
// })();
// console.log(result);
// console.log(var1);
// (function (var1) {
//    console.log("My name is " + var1);
// })("Kuhle");

// Practice exercise 6.6
// function calcFactorial(nr) {
//     console.log(nr);
//     if (nr === 0) {
//         return (1);
//     }
//     else {
//         return nr * calcFactorial(--nr);
//     }
// }
// console.log(calcFactorial(4));

// Practice exercise 6.7
// let start = 10;
// function loop1(var1) {
//     console.log(var1);
//     if (var1 < 1) {
//         return;
//     }
//     return (loop1(var1 - 1));
// }
// loop1(start);
// function loop2(var1) {
//     console.log(var1);
//     if (var1 > 0) {
//         var1--;
//         return (loop2(var1));
//     }
//     return;
// }
// loop2(start);


//Practice exercise 6.8
// let arg = function(var2){
//     console.log(var2);
//  }
//  arg("She doesn't hate you");

// function arg1(var2){
//     console.log(var2);
//  }
//  arg1("I'm certain she hates me!");

// Chapter projects
// Create a recursive function
// let value = function count(j) {
//     console.log(j);
//     if (j < 10) {
//         return (count(j + 1));
//     }
//     return;
//  }
//  value(0);

//Set timeout order
// let one = () => console.log('one');
// let two = () => console.log('two');
// let three = () => {
//     console.log('three');
//     one();
//     two();
// }
// let four = () => {
//     console.log('four');
//     setTimeout(one,1000);
//     three();
// }
// four();

// Self-check quiz
// 1.
// let val = 10;
// function tester(val){
//    val += 10;
//    if(val < 100){
//        return tester(val);
//    }
//    return val;
// }
// tester(val);
// console.log(val); 
//answer = 10
// 2.
// let testFunction = function(){
//     console.log("Hello");
//  }();
// answer = Hello
// 3.
// (function () {
//     console.log("Welcome");
//  })();
//  (function () {
//     let firstName = "Laurence";
//  })();
//  let result = (function () {
//     let firstName = "Laurence";
//     return firstName;
//  })();
//  console.log(result);
//  (function (firstName) {
//     console.log("My Name is " + firstName);
//  })("Laurence");
//answer = Welcome, Laurence, My name is Laurence
//  4. 
//  let test2 = (num) => num + 5;
//  console.log(test2(14))
//answer = 19
// 5.
// var addFive1 = function addFive1(num) {
//     return num + 2;
// };
// let addFive2 = (num) => num + 2;
// console.log(addFive1(14));
//answer = 16

// let age = Number(prompt("What is your age?"));
//    if (age > 12) {
//      allowed = true;
//      }else {
//         allowed = false;
//      }
// alert(`Are you allowed in? ${allowed}`);

// function Car


// class Car {
//     constructor(carName, make, model, year) {
//         this.carName = Audi;
//         this.make = convertible;
//         this.model = R8;
//         this.year = 2023;
//     }
// }
// class Car {
//     constructor(carName1, make1, model1, year1) {
//         this.carName1 = Audi;
//         this.make1 = convertible;
//         this.model1 = R8;
//         this.year1 = 2023;
//     }
// }
// console.log(Car.carName, "is a", make, model, "made in", year)

// class Person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
// }
// let person1 = new Person("Maaike", "van Putten");
// let person2 = new Person("Laurence", "Svekis");
// console.log(person1.firstname + person1.lastname);
// console.log(person2.firstname + person2.lastname);

// class Car {
//     constructor(CarName, make, model, year) {
//         this.CarName = CarName;
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }
// }
// let Car1 = new Car(" This Audi is a", "Convertible", "R8", 2023);
// let Car2 = new Car("BMW", "SUV", "6 Series GT", 2020)
// console.log(Car1.CarName,"is a",  Car1.make, Car1.model, " made in ", Car1.year);
// console.log(Car2.CarName, "is a", Car2.make, Car2.model, "made in", Car2.year);

// class Dog {
//     constructor(dogName, weight, color, breed) {
//         this.dogName = dogName;
//         this.weight = weight;
//         this.color = color;
//         this.breed = breed;
//     }
// }
// let dog = new Dog("JavaScript", 2.4, "brown", "chihuahua");
// console.log(dog.dogName, "is a", dog.breed, "and weighs", dog.weight,
//     "kg.");

// let addresses = [{
//     street: "2nd street",
//     number: "123",
//     zipcode: "33116",
//     city: "Miami",
//     state: "Florida"
// },
// {
//     street: "1st West avenue",
//     number: "5",
//     zipcode: "75001",
//     city: "Addison",
//     state: "Texas"
// }];

// console.log(addresses[1],[3])

// let nr1 = 2;
// let nr2 = "2";
// console.log(nr1 + nr2);


// const myArray = [1,5,7];
// for(el of myArray){
//   console.log(Number(el));
//   el = Number(el) + 2;
//   console.log(el);
//  }
// console.log(myArray);

// let allowed = parseInt(prompt("What is your age") > 12) ? true : false
// alert(`Are you allowed in? ${allowed}`)

// let allowed;
// let age = Number(prompt("What is your age?"));
//    if (age > 12) {
//      allowed = true;
//      }else {
//         allowed = false;
//      }
// alert(`Are you allowed in? ${allowed}`);

// let nameArray = ["Eleanor", "Liam", "Ava", "Noah", "Sophia", "Oliver", "Emma", "William", "Isabella", "James"];

// let nameRequest = prompt("Please enter a name.")

// function guessList(name) {
//     for (let i = 0; i < nameArray.length; i++) {
//         if(name === nameArray[i]) {
//                 return alert(`You are on the list!`)
//         } else {
//             alert(`${name} is not on the list unfortunately`)
//             break;
//         }
//     }
// }

// let nameArray = ["Eleanor", "Liam", "Ava", "Noah", "Sophia", "Oliver", "Emma", "William", "Isabella", "James"];

// let nameRequest = prompt('Please enter a name');

// function guessList(name) {
//     let found = false;
//     nameArray.forEach((item) => {
//         if (name === item) {
//             found = true;
//         }
//     });
//     if (found) {
//         alert('You are on the list!');
//     } else {
//         alert(`${name} is not on the list unfortunately`);
//     }
// }

// guessList(nameRequest);

// let guestNames = ["Marcus", "Kamva", "Rishen", "Sheryl", "David", "Diego", "Pierre", "Akira", "Eddie", "Donga"];
// let userName = prompt("Enter your name:");

// guestNames.forEach(i => userName === guestNames[i], {
//     found = true
// });
// console.log("welcome")
// console.log("not welcome");

let list = ["Anitha", "Sindy", "Grace", "Junior", "Daniel", "Veronica", "Shantel", "Angel", "Exo", "Prince"];
let Name = prompt("Enter your name:");

function checkList(name) {
  let entryGranted = false;

  list.forEach(guest => {
    if (guest.toLowerCase() === name.toLowerCase()) {
      entryGranted = true;
  }
});

return entryGranted;
}

let entryGranted = checkList(Name);

if (entryGranted) {
  console.log(Name + " is allowed in.");
} else {
  console.log(Name + " is not on the guest list.");
}




