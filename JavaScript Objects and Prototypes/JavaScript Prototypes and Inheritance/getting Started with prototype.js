
var actonFamily = ["Maire Acton", "Tim Acton", "Jacob Acton", "Thomas Acton"];

Object.defineProperty(Array.prototype, "last",{
    get: function () {
        return this[this.length - 1]
    }
});

console.log(actonFamily.last);

// What is a prototype
/**

 A prototype is an object that exists on every function in javascript
 */

var testFunction = function () {
};

//Printing
console.log(testFunction.prototype);


/***
 * Objects dont have prototype property
 */

var greetings = "Hello Thomas Acton";
console.log(greetings.__proto__)

// A function's prototype :
/***
 1.  A function prototype is the object instance that will become the prototype for all objects
    creating this function as a constructor


 2.  An object prototype: An object prototype is the object instance from which the object is inherited
 * */

function MyPerson(name, age, heightFt) {
    this.heightFt = heightFt;
    this.name = name;
    this.age = age;
}
var fluffy = new MyPerson('Thomas Acton', 24, 6);
var fluffy = new MyPerson('Thomas Acton', 24, 6);
MyPerson.prototype.weight = 3;



console.log(MyPerson.prototype);
console.log(fluffy.__proto__);

console.log(MyPerson.prototype === fluffy.__proto__);

