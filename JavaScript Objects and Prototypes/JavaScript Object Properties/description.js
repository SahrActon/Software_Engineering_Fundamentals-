var donkey = {
    name : "Donkey kong",
    color : "gray",
    age: 4
}

getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor(donkey,'name')
console.log(getOwnPropertyDescriptor)