// Chapter projects
// Word scrambler 
let str = "Chef";
function scramble(val) {
    let max = val.length;
    let temp = "";
    for (let i = 0; i < max; i++) {
        console.log(val.length);
        let index = Math.floor(Math.random() * val.length);
        temp += val[index];
        console.log(temp);
        val = val.substr(0, index) + val.substr(index + 1);
        console.log(val);
    }
    return temp;
}
console.log(scramble(str));

// Countdown timer
let endDate = "Mar 16 2024";
function countdown() {
    let total = Date.parse(endDate) - new Date();
    let days = Math.floor(total / (1000 * 60 * 60 * 24));
    let hrs = Math.floor((total / (1000 * 60 * 60)) % 24);
    let mins = Math.floor((total / 1000 / 60) % 60);
    let secs = Math.floor((total / 1000) % 60);
    return {
        days,
        hrs,
        mins,
        secs
    };
}
function update() {
    let temp = countdown();
    let output = "";
    for (let property in temp) {
        output += (`${property}: ${temp[property]} `);
    }
    console.log(output);
    setTimeout(update, 1000);
}
update();