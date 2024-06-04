// Chapter projects
// Create a recursive function
let value = function count(j) {
    console.log(j);
    if (j < 10) {
        return (count(j + 1));
    }
    return;
 }
 value(0);

//Set timeout order
let one = () => console.log('one');
let two = () => console.log('two');
let three = () => {
    console.log('three');
    one();
    two();
}
let four = () => {
    console.log('four');
    setTimeout(one,1000);
    three();
}
four();