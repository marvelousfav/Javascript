//Chapter projects
// Employee tracking app
class Employee {
    constructor(fname, lname, years) {
        this.fname = fname;
        this.lname = lname;
        this.years = years;
    }
}
let person1 = new Employee("Thabang", "Zulu", 3);
let person2 = new Employee("Denis", "Denver", 6);
let person3 = new Employee("Joseph", "Treng", 8)
let workers = [person1, person2, person3];
Employee.prototype.details = function () {
    return this.fname + " " + this.lname + " has worked at Marvelous Fashion Pty LTD for " +
        this.years + " years";
}
workers.forEach((person) => {
    console.log(person.details());
});

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
let var4 = new Menu(1, 2, 4);
console.log(var1.total);
console.log(var2.total);
console.log(var3.total);
console.log(var4.total); 

