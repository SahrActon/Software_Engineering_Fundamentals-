'use strict'

/**
 * using the new key word

 In Javascript the "this" keyboard refers to the object or property it belongs to

 */

function Cat(){
    this.color = 'White'
    this.name = 'Fluffy cat';

}
var cat1  = new Cat();
console.log(cat1)

function Person (name, age, height, weight){
    this.name = name;
    this.age = age;
    this. height = height;
    this.weight = weight;
}

var person1 = new Person("Thomas", 23, 180, 78);
console.log(person1)
//