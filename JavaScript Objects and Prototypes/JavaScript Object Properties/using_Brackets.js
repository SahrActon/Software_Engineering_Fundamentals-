//use strict

/**
 * 1.
*/

var donkey = {
    name : "Donkey kong",
    color : "gray",
    age: 4
};

var person = {
    name : "Thomas Acton ",
    age: 2,
    weight_kg : 80
};

console.log(donkey['name']);
console.log(donkey['color']);

console.log(person.weight_kg);

// Object property descriptor

/**
 * 2.
 */
console.log(Object.getOwnPropertyDescriptor(person, "weight_kg"));
console.log(Object.getOwnPropertyDescriptor(person, "name"));

/**
 * 3.
 */
/*
Prints the following

{ value: 80,
  writable: true,
  enumerable: true,
  configurable: true }

  value = The value of the object

  writable : Define is the object can be changed from its initial value

  enumerable

  configurable
**/


/**
 * 4.
 */


var cat  ={
    name: {firstName:"Super ", lastName:"Cutie"},
    colour : "White"
};

// object.defineProperty(cat, 'name',{ writeable:false })
cat.name.firstName = 'Benny';
console.log('\n' + cat.name.firstName + " " +  cat.name.lastName);

