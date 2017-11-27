'use strict'

var person1 = { name: "Thomas Acton", gender:"Male", age: 23}
var person2 = { name: "Thomas Acton", gender:"Male", age: 23}
person1.height = 6.0

person1.date = function (person1, person2) {
    if (person1.gender === person2.gender){
        console.log("You can not date the same person on this platform")
    }
    else {
        console.log("You two can date")
    }
}


person1.date(person1, person2)
//

