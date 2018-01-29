// Working with configurable properties

/**
 * The configurable property locks down a property from being changed as well as it attributes
 */

var person  = {
    name : "Thomas Acton",
    age: 24,
    weight_kg: 70
}

// object.defineProperty(person, 'name', {configurable:false});
console.log(person);
console.log("Deleting age");
delete person.age;
console.log(person);
