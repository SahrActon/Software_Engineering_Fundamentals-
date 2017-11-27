/**
 * Working with function
 * @Date
 * 21/09/2017
 */



//synchronous

function greeting() {
    setTimeout(function () {
        console.log("I'm first ")
    },300)
}

function processUserInput() {
        console.log("I'm second \n ")
}


//asynchronous callbacks


function firstFn(cb) {
    setTimeout(function () {
        console.log("Back at it again");
        cb();
    },3000)
}

function secondFn() {
    console.log("With the white Vans!");
}

firstFn(function () {
    secondFn();
});

console.log('Damn Danial')