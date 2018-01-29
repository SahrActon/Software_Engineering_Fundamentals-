// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get

/**
 *
 * @type {{firstName: string, lastName: string, age: string, weight_kg: number}}
 */
var person = {
    firstName : "Thomas",
    lastName : "Acton",
    age: "24",
    weight_kg: 70
}

console.log("Printing the getter Property");

// Creating a setter property

Object.defineProperty(person, "fullName",
    {
        get : function () {
            return person.firstName + " " + person.lastName
        },
        set: function (value) {
            var nameParts = value.split(' ');
            person.firstName = nameParts[0];
            person.lastName = nameParts[1];
        }
    })


console.log(person.fullName+ "\n");

//Function
console.log("Printing the fullName function");


console.log("Setter");

person.fullName = "Bob Smith";

console.log("Printing Setters");
console.log(person.fullName);
console.log(person.firstName);
console.log(person.lastName);

