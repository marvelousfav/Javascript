// //Practice Exercise 3.1
// let list = ["milk", "bread", "apples"];
// console.log(list.length);
// list[1] = "bananas";
// console.log(list);

// // //Practice Exercise 3.2
// let mlist = [];
// mlist.push("milk", "bread", "apples");
// mlist.splice(1, 1, "bananas", "eggs");
// let removeitem = mlist.pop();
// console.log(removeitem);

// mlist.sort();
// console.log(mlist.indexOf("milk"));
// mlist.splice(1, 0, "carrots", "lettuce");
// let mlist2 = ["juice", "pop"];
// let flist = mlist.concat(mlist2, mlist2);
// console.log(flist.lastIndexOf("pop"));
// console.log((flist));

// // //Practice Exercise 3.4
// let mycar = {
//     make: "Audi",
//     model: "SUV",
//     color: "white",
//     forsale: true
// };
// let pcolor = "color";
// mycar[pcolor] = "black";
// pcolor = "forsale";
// mycar[pcolor] = false;
// console.log(mycar.make, mycar.color);
// console.log(mycar.forsale)

// //Practice Exercise 3.3
// // let array = [1, 2, 3];
// // let narray = [array, array, array];
// // console.log(narray[1][1]);
// // // console.log(narray[0][1]);
// // // console.log(narray[2][1]);

// // // Practice exercise 3.5
// let people = { friends: [] };
// let friend1 = { fname: "Sharon", lname: "Goodman", id: 3 };
// let friend2 = { fname: "Prince", lname: "Ivandor", id: 7 };
// let friend3 = { fname: "Alexander", lname: "Sumor", id: 2 };
// people.friends.push(friend1, friend2, friend3);
// console.log(people);
// // console.log(friend1);

// //Chapter Project
// let theList = ['Laurence', 'Svekis', true, 35, null, undefined,
//     { test: 'one', score: 55 }, ['one', 'two']];
// theList.splice(2,6,"middle","hello world","last")
// // theList.pop();
// // theList.shift();
// // theList.unshift("FIRST");
// // theList[3] = "hello world";
// // theList[2] = "MIDDLE";
// // theList.push("LAST");
// console.log(theList);

// let inventory = [];
// let item3 = {
//     name: "cereal",
//     model: "bokomo",
//     cost: 40,
//     quan: 5
// }
// let item2 = {
//     name: "toothpaste",
//     model: "synsodyne",
//     cost: 200,
//     quan: 11
// }
// let item1 = {
//     name: "peanut butter",
//     model: "black cat",
//     cost: 50,
//     quan: 1
// }
// inventory.push(item1, item2, item3);
// console.log(inventory);
// console.log(inventory[1].quan);

// // //Self-check quiz
// // // 1. yes
// // // 2. length
// // 3.
// // const  myArr1 = [1,3,5,6,8,9,15];
// // console.log(myArr1.push());
// // console.log(myArr1.indexOf(0));
// // console.log(myArr1.indexOf(3));
// // answer = -1,1
// // 4.
// // const myArr = [1,3,5,6,8,9,15];
// // myArr.splice(1,1,4);
// // console.log(myArr);
// // 5.
// // const myArr2 = [];
// // myArr2[10] = 'test'
// // console.log(myArr2);
// // console.log(myArr2[2]);
// // //answer = [empty x 10,'test]
// // //undefined
// // 6.
// // const myArr3 = [3,6,8,9,3,55,553,434];
// // myArr3.sort();
// // myArr3.length = 2;
// // console.log(myArr3);
// // //answer = undefined




