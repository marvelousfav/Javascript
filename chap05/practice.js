//Practice exercise 5.1
// let max = 5;
// let rnumber = Math.floor(Math.random() * max) + 1;
// // console.log(rnumber);
// let correct = false;
// while (!correct) {
//     let guess = prompt("guess a number 1 - " + max);
//     guess = Number(guess);
//     if (guess === rnumber) {
//         correct = true;
//         console.log("You got it " + rnumber);
//         break;
//     } else if (guess > rnumber) {
//         console.log("Too high");
//     } else {
//         console.log("Too Low");
//     }
// }

// //Practice exercise 5.2
// // let counter = 0;
// let step = 5;
// do {
//    console.log(counter);
//    counter += step;
// }
// while (counter <= 100);

// Practice exercise 5.3
// let mywork = [];
// for (let x = 1; x < 10; x++) {
//     let stat = x % 2 ? true : false;
//     let temp = {
//         name: `Lesson ${x}`, status: stat
//     };
//     mywork.push(temp);
//  }
//  console.log(mywork);

// Practice exercise 5.4
// let mtable = [];
// let rows = 4;
// let columns = 7;
// let counter = 0;
// for (let y = 0; y < rows; y++) {
//    let tempTable = [];
//    for (let x = 0; x < columns; x++) {
//        counter++;
//        tempTable.push(counter);
//     }
//     mtable.push(tempTable);
//  }
//  console.table(mtable);

// Practice exercise 5.5
// const grid = [];
// const cells = 64;
// let counter = 0;
// let row;
// for (let x = 0; x < cells + 1; x++) {
//    if (counter % 8 == 0) {
//        if (row != undefined) {        
//            grid.push(row);
//        }
//        row = [];
//    }
//    counter++;
//    let temp = counter;
//    row.push(temp);

// }
// console.table(grid);

// Practice exercise 5.6
// const myArray = [];
//  for (let x = 0; x < 10; x++) {
//     myArray.push(x + 1);
//  }
//  console.log(myArray);
 
// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
//  }
//  for (let val of myArray) {
//     console.log(val);
//  }

// Practice exercise 5.7
// const obj = {
//     a: 1,
//     b: 2,
//     c: 3
//  };
//  for (let prop in obj) {
//     console.log(prop, obj[prop]);
//  }
//  const arr = ["a", "b", "c"];
//  for (let w = 0; w < arr.length; w++) {
//     console.log(w, arr[w]);
//  }
 
// for (el in arr) {
//     console.log(el, arr[el]);
//  }

// Practice exercise 5.8
// let output = ""; 
// let skipThis = 7; 
// for (let i = 0; i < 10; i++) { 
//   if (i === skipThis) { 
//     break; 
//   } 
//   output += i; 
// } 
// console.log(output);

//Project
// Math multiplication table
// const myTable = [];
// const numm = 10;
// for(let x=0; x<numm; x++){
//    const temp = [];
//    for(let y = 0; y<numm; y++){
//        temp.push(x*y);
//    }
//    myTable.push(temp);
// }

// console.table(myTable);

// Self-check quiz
1.
// let step = 3;
// for (let i = 0; i < 1000; i += step) {
// if (i > 10) {
// break;
//    }
// console.log(i);
// }
//answer = 0,3,6,9
2.
// const myArray = [1,5,7];
// for(el in myArray){
// console.log(Number(el));
//    el = Number(el) + 5;
// console.log(el);
// }
// console.log(myArray);









