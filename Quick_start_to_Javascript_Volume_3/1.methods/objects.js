/**
 * Created by tommyacton on 22/05/2017.
 Working with objects - Using coffee making machine as an example
 */


// creating an object
var myCoffee =  {

    flavor : "espresso",
    temperature: "hot",
    ouncesOfCoffee: 100,
    addMilk: true,

    reheat: function () {

        if (myCoffee.temperature === "cold"){
            myCoffee.temperature = "pipping hot";
            alert ("Your coffee is now pipping hot")
        }

    }
};


myCoffee.temperature = "cold";
myCoffee["ouncesOfCoffee"] = 90;
alert(myCoffee.ouncesOfCoffee);
console.log("Here is the second element in the array "+ myCoffee.flavor);
myCoffee.reheat();


