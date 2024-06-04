let myList = [{
    "name": "Chocolate",
    "status": false
},
{
    "name": "Chocolate Cake",
    "status": true
}
];

reloader();
function reloader() {
myList.forEach((el) => {
console.log(`${el.name} = ${el.status}`);
});
}