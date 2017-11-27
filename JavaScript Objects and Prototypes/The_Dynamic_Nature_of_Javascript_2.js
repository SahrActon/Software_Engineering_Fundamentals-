'use strict'

var y = 10;
var x;
// Creating an object literal
var cat = {
    name: "Kitty Cat", color: "blue", jump: function () {
        for (x = 0; x < y; x++) {
            console.log(" Jump, jump");
        }
    }
}
console.log("Cat Name " + cat.jump());

cat.age = 3;
cat.Weight = 30;
cat.getWeight = function () {
    console.log(cat.getWeight() + " kg")
}

cat.speak = function () {
    console.log("Meooow")
}

//


