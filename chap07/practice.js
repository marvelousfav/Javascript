// Practice exercise 7.1
// class Person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
// }
// let person1 = new Person("Sindy", "van Wyk");
// let person2 = new Person("Alex", "Goodman");
// console.log("hi " + person1.firstname + " hope you well.");
// console.log("hello " + person2.firstname + " hope you well.");

//Practice exercise 7.2
// class Person { 
//     constructor(firstname, lastname) { 
//     this.firstname = firstname; 
//     this.lastname = lastname;
//     } 
//     fullname(){
//         return this.firstname + " " + this.lastname;
//     }
//  } 
// let person1 = new Person("Kelly", "Keet");
//  let person2 = new Person("Masego", "Goodgall");
//  console.log(person1.fullname());
//  console.log(person2.fullname());

//Practice exercise 7.3
//  class Animal {
//     constructor(animal, sound) {
//         this.animal = animal;
//         this.sound = sound;
//     }
//     speak() {
//         console.log(this.animal + " " + this.sound);
//     }
//  }
//  Animal.prototype.eat = function () {
//     return this.animal + " is eating";
//  }
//  let lion = new Animal("lion", "roars");
//  let tiger = new Animal("tiger", "chuff");
//  lion.speak();
//  console.log(lion.eat());
//  console.log(tiger);

//Chapter projects
// Employee tracking app
// class Employee {
//     constructor(fname, lname, years) {
//         this.fname = fname;
//         this.lname = lname;
//         this.years = years;
//     }
// }
// let person1 = new Employee("Thabang", "Zulu", 3);
// let person2 = new Employee("Denis", "Denver", 6);
// let person3 = new Employee("Joseph", "Treng", 8)
// let workers = [person1, person2, person3];
// Employee.prototype.details = function () {
//     return this.fname + " " + this.lname + " has worked at Marvelous Fashion Pty LTD for " +
//         this.years + " years";
// }
// workers.forEach((person) => {
//     console.log(person.details());
// });

//Menu items price calculator
class Menu {
    #off1 = 10;
    #off2 = 20;
    #off3 = 15;
    constructor(var1, var2, var3) {
        this.var1 = var1;
        this.var2 = var2;
        this.var3 = var3;
    }
    calTotal() {
        return (this.var1 * this.#off1) + (this.var2 * this.#off2) + (this.var3 * this.#off3);
    }
    get total() {
        return this.calTotal();
    }
}
let var1 = new Menu(2, 1, 2);
let var2 = new Menu(1, 2, 5);
let var3 = new Menu(3, 2, 0);
let var4 = new Menu(1, 2, 4)
console.log(var1.total);
console.log(var2.total);
console.log(var3.total);
console.log(var4.total);

// Self-check quiz
// 1. 
// class
// 2. 
// class Person {
// constructor(firstname, lastname) {
// this.firstname = firstname;
// this.lastname = lastname;
//    }
// }
// 3. 
// Inheritance
// 4.
// • True
// • False
// • True
// • True
// • False
// 5. 
// B

//eben's example
// "use strict";

// let print = (...param1) => console.log(...param1);


// class MenuItems {
//     #menuItem1
//     #menuItem1Price
//     #amount1
//     #menuItem2
//     #menuItem2Price
//     #amount2
//     constructor(menuItem1, menuItem1Price, amount1, menuItem2, menuItem2Price, amount2) {
//         this.#menuItem1 = menuItem1;
//         this.#menuItem1Price = menuItem1Price;
//         this.#amount1 = amount1;
//         this.#menuItem2 = menuItem2;
//         this.#menuItem2Price = menuItem2Price;
//         this.#amount2 = amount2;
//     }

//     calculateTotal() {
//         if (this.#amount1 > 0 && this.#amount2 > 0) {
//             return (this.#amount1 * this.#menuItem1Price) + (this.#amount2 * this.#menuItem2Price);
//         }
//     }
//     get getTotal() {
//         print("You ordered", this.#menuItem1, "and", this.#menuItem2 + ", your total is R" + this.calculateTotal());
//     }
// }

// let bagleAndCoffee = new MenuItems("Bagles", 18, 3, "Coffee", 33, 2);
// bagleAndCoffee.getTotal;

// let burgersAndFries = new MenuItems("Burgers", 120, 2, "fries", 21, 3);
// burgersAndFries.getTotal;

// let milkshakesAndIcecream = new MenuItems("Milkshakes", 56, 2, "Ice-Cream", 17, 4);
// milkshakesAndIcecream.getTotal;


