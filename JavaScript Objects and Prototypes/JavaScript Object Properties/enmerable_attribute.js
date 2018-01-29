/**
 *
 * @type {{firstName: string, lastName: string, age: number, weight_kg: number, birthPlace: {Country: string, city: string}}}
 */

/**
 1.
 */
var person= {
    firstName: "Thomas" ,
    lastName: "Acton",
    age : 24,
    weight_kg : 80,
    birthPlace : {Country:"Gambia", city:"Banjul"}
}

console.log("Printing something" + '\n');


/**
 2.
 */
// Getting the values of the properties
for( var propertyName in person ){
    console.log("Printing the propertyNames " + propertyName + '\n')
}

/**
 3.
 */
console.log(Object.getOwnPropertyDescriptor(person, "firstName"));

/**
 4.

 Enumerable properties are those properties whose internal [[Enumerable]] flag is set to true,
 which is the default for properties created via simple assignment or via a property initializer
 (properties defined via Object.defineProperty and such default [[Enumerable]] to false).
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

console.log("\n");

// Object.defineProperties(person, 'firstName',{enumerable : false});
/**
 * This is setting the enumerable to false, this ultimately means that you will note be able to loop over the values of the object
 */

for(var propertyName in person) {
    console.log(propertyName + ':' + person[propertyName]);
}
console.log("Printing object keys ")
console.log(Object.keys(person))

console.log(" Printing the objects in Json format ")
console.log(JSON.stringify(person))
