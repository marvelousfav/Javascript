//Chapter Project
let theList = ['Laurence', 'Svekis', true, 35, null, undefined,
    { test: 'one', score: 55 }, ['one', 'two']];
theList.splice(2,6,"middle","hello world","last")
// theList.pop();
// theList.shift();
// theList.unshift("FIRST");
// theList[3] = "hello world";
// theList[2] = "MIDDLE";
// theList.push("LAST");
console.log(theList);

let inventory = [];
let item3 = {
    name: "cereal",
    model: "bokomo",
    cost: 40,
    quan: 5
}
let item2 = {
    name: "toothpaste",
    model: "synsodyne",
    cost: 200,
    quan: 11
}
let item1 = {
    name: "peanut butter",
    model: "black cat",
    cost: 50,
    quan: 1
}
inventory.push(item1, item2, item3);
console.log(inventory);
console.log(inventory[1].quan);