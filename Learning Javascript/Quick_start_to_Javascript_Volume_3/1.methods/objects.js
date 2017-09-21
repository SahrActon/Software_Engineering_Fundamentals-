/**
 * Created by tommyacton on 22/05/2017.
 Working with objects - Using coffee making machine as an example
 */

var typeOfMilk = ["Cow","Soy"]


// creating an object
var myCoffee = {
    flavor: "lata",
    temperature: "hot",
    ouncesOfCoffee : 100,
    milk : typeOfMilk[1],

    reheat: function () {
        if(myCoffee.temperature === "cold"){
            myCoffee.temperature = "pipping hot"
            console.log("Your coffee is now " + myCoffee.temperature + '\n');
        }
    }
};


console.log(myCoffee);
myCoffee.temperature = "cold";
console.log('\n');
myCoffee.reheat();

console.log(myCoffee);
