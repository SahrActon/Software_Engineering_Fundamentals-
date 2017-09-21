/**
 * Created by tommyacton on 15/05/2017.
 */

/** Notes
* The this Keyboard
  In Javascript the thing called "this" is an object that owns the "Javascript node.
 The value of this, when used in a function, is the object that owns the function
*
*
* */


//alert("Hi I work");

function person(firstName, lastName, age, fav_Colour) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age ;
    this.fav_colour = fav_Colour;
}

var Thomas = new person("Thomas", "Acton", 23, "blue");
var Jacob = new person("Jacob", "Acton", 20,"White");


console.log(Thomas);
console.log(Jacob);
