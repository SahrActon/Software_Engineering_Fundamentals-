/**
 * Created by tommyacton on 06/07/2017.
 */

/***
 --------------------------------------------------------
 1.  What are the necessary steps
 --------------------------------------------------------

 Beginning:
 1. Write scenarios
 2. Store the list of possible scenarios
 3. OOP[ Alert a random scenario from the list of possible scenarios

 Weapon:
 1. Create a list of weapons
 2. Store the list of weapons
 3. OOP[ Alert which weapon the player finds

 --------------------------------------------------------
 2. What syntax or coding patterns might you use
 --------------------------------------------------------

 --------------------------------------------------------
 3. OOP[ Life
 --------------------------------------------------------
 1. You start with a 100% life


 --------------------------------------------------------
 4. How you lose life
 --------------------------------------------------------
 1. you will be asked a range of math random questions
 2. For each question that you get right you can you gain
    5 points

 * **/

//Setting the current Scenarios
var $beginningScenarios = ["You woke in a zombie land within a hospital. ", "You are the only human left in London. ", "You are surrounded by zombie cats. ","There seems to be a zombie virus. "];

function randomNumberSelector(range) {
    return Math.round(Math.random() * range);
}

//List of weapons
var $weaponList = ["Shovel", "AK47", "Baseball bat", "Crossbow"];
var $chosenWeapon = $weaponList[randomNumberSelector($weaponList.length-1)];

//alert(chosenWeapon);

//Life strength
var lifeStrength = 70;
//alert("Your current life is :" + lifeStrength);

//Question 
function questions() {
    
}



//Jquery stuff here
$(document).ready(function(){
    $("#beginningScenarios").append("Oh dam ",$beginningScenarios[randomNumberSelector($beginningScenarios.length - 1 )] + " You now have to survive.");
    $('#weapon').append("Your random allocated weapon is a ",$chosenWeapon);

    $('#questionAsked').append(Math.random());
});




