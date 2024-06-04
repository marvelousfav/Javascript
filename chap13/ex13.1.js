function greet(fullName){
    console.log(`Hey, ${fullName[0]} ${fullName[1]}`)
}
function processCall(user, callback){
    const fullName = user.split(" ");
    callback(fullName);
}

processCall("Marvelous Favour", greet);