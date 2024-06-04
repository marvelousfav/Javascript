let myList = [{
    "name": "Chocolate",
    "status": false
},
{
    "name": "Chocolate Cake",
    "status": true
}
];

let newStr = JSON.stringify(myList);
let newObj = JSON.parse(newStr);
newObj.forEach((el)=>{
    console.log(el);
});