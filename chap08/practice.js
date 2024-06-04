//Practice exercise 8.1
// let mes1 = "I'm%20so%20hungry%3F";
// let mes2 = "I'm so hungry!";
// let decodedComp = decodeURIComponent(mes1);
// console.log(decodedComp);

// let encodedComp = encodeURIComponent(mes2);
// console.log(encodedComp);

// let uri = "http://www.basescripts.com?=Hello World";
// let encoded = encodeURI(uri);
// console.log(encoded);

// Practice exercise 8.2
// let arr = ["Kuhle", "Sean", "Sandra", "Jane", "Moses", "Kuhle", "Sean", "Kuhle", "Sean", "Kuhle", "Sean"];
// let arr2 = arr.filter ( (value, index, array) => {
//     console.log(value,index,array.indexOf(value));
//     return array.indexOf(value) === index;
//  });
//  console.log(arr2);

// Practice exercise 8.3
// let array = [1, 3, 5, 7, 9, 11];
// let array1 = array.map(function (element) {
//     return element * 2;
// });
// console.log(array1);
// let array2 = array.map((element) => element * 2);
// console.log(array2);

//Practice exercise 8.4
// let val = "i aM nOT sO hunGrY AnyMOre";
// function capWords(str) {
//     str = str.toLowerCase();
//     let arr = [];
//     let words = str.split(" ");
//     words.forEach(word => {
//         let array = word.slice(0, 1).toUpperCase() + word.slice(1);
//         arr.push(array);
//     });
//     return arr.join(" ");
// }
// console.log(capWords(val));

// Practice exercise 8.5
// let val = "I love JavaScript";
// val = val.toLowerCase();
// let vowels = ["a","e","i","o","u"];
// vowels.forEach((letter,index) => {
//    console.log(letter);
//    val = val.replaceAll(letter,index);
// });
// console.log(val);

//Practice exercise 8.6
// console.log(Math.ceil(5.7));
// console.log(Math.floor(5.7));
// console.log(Math.round(5.7));
// console.log(Math.random());
// console.log(Math.floor(Math.random() * 11)); // 0-10
// console.log(Math.floor(Math.random() * 10) + 1); // 1-10;
// console.log(Math.floor(Math.random() * 100) + 1); // 1-100;
// function ranNum(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// for (let x = 0; x < 100; x++) {
//     console.log(ranNum(1, 100));
// }

// Practice exercise 8.7
// let future = new Date(2025, 5, 15);
// console.log(future);
// let months = ["January", "February", "March", "April", "May", "June", 
// "July", "August", "September", "October", "November", "December"];
// let day = future.getDate();
// let month = future.getMonth();
// let year = future.getFullYear();
// let myDate = `${months[month-1]} ${day} ${year}`;
// console.log(myDate);

// Chapter projects
// Word scrambler 
// let str = "Chef";
// function scramble(val) {
//     let max = val.length;
//     let temp = "";
//     for (let i = 0; i < max; i++) {
//         console.log(val.length);
//         let index = Math.floor(Math.random() * val.length);
//         temp += val[index];
//         console.log(temp);
//         val = val.substr(0, index) + val.substr(index + 1);
//         console.log(val);
//     }
//     return temp;
// }
// console.log(scramble(str));

// Countdown timer
// let endDate = "Mar 16 2024";
// function countdown() {
//     let total = Date.parse(endDate) - new Date();
//     let days = Math.floor(total / (1000 * 60 * 60 * 24));
//     let hrs = Math.floor((total / (1000 * 60 * 60)) % 24);
//     let mins = Math.floor((total / 1000 / 60) % 60);
//     let secs = Math.floor((total / 1000) % 60);
//     return {
//         days,
//         hrs,
//         mins,
//         secs
//     };
// }
// function update() {
//     let temp = countdown();
//     let output = "";
//     for (let property in temp) {
//         output += (`${property}: ${temp[property]} `);
//     }
//     console.log(output);
//     setTimeout(update, 1000);
// }
// update();

// Self-check quiz
// 1. 
// decodeURIComponent(e)
// 2. 
// 4
// 3. 
// ["Hii", "hi", "hello", "Hii", "hi", "hi World", "Hi"]
// 4. 
// ["hi", "hi World"]

// var movies = {
//     "Finding Nemo": {
//         releaseDate: 2003,
//         duration: 100,
//         actors: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"],
//         format: "DVD"
//     },

//     "Star Wars: Episode VI - Return of the Jedi": {
//         releaseDate: 1983,
//         duration: 134,
//         actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
//         format: "DVD"
//     },

//     "Harry Potter and the Goblet of Fire": {
//         releaseDate: 2005,
//         duration: 157,
//         actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
//         format: "Blu-ray"
//     },

//     "Suspense": {
//         releaseDate: 2020,
//         duration: 104,
//         actors: ["Dwayne Johnson", "Chris Milly", "Angelina Santaro"],
//         Format: "HD"
//     }
// };
// console.log(movies[1]);
// console.log(movies[releaseDate])


// let carsForSale = {};
// carsForSale["BMW"] = 0;
// carsForSale["Audi"] = 0;
// carsForSale["VW"] = 0;

// console.log(carsForSale.BMW + 2);
// console.log(carsForSale.Audi + 5);
// console.log(carsForSale.VW + 1);


