/**

 An arrow function expression has a shorter syntax than a function expression and does not have its own this, arguments, super, or new.target.
 These function expressions are best suited for non-method functions, and they cannot be used as constructors.

 */
var names =  ["Thomas Acton", 'Jacob Acton', 'Maire Acton', 'Tim Acton'];
console.log(names.map(name => name.length));

