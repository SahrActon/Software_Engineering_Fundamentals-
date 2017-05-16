/**
 * Created by tommyacton on 15/05/2017.
 */

var friends = ["Abraham ", "Benjamin ", "Zabe ", "Dan ", "Fridy "];

console.log("These are my friends " + '\n' + friends + '\n');
console.log("I am sorted " + '\n'+  friends.sort());

//Pop
var popped = friends.pop();
console.log("Hi I have removed the last element in the array " + popped + '\n');
console.log(friends.sort());

//Push
friends.push('Samy');
friends.push('Frank');
friends.push('Camran');
friends.push('Gemma');
friends.push('Emmanuel');
console.log("Hello i added two new elements in the array" + '\n');
console.log(friends.sort());
