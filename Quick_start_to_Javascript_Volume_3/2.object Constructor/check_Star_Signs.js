/**
 * Created by tommyacton on 15/05/2017.
 */
alert("Hi I work");


//Create object constructor

function createPerson(name, tShirtColor) {
    this.name = name;
    this.tShirtColor = tShirtColor.toString();

}



function getPerson(callback) {
        alert("Hello my name is " + callback.name + ", my favourite colour is " + callback.tShirtColor);
}


var thomas = new createPerson("Thomas", "Green");
var lisa = new createPerson("lisa", "Pink");

getPerson(thomas);
getPerson(lisa);

