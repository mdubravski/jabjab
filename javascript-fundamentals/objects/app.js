/**
 * 
 * objects = collection of properties and methods
 * 
 */

const Person = {
    eyes: 2,
    legs: 2,
    language: "English",
    speak: function(){
        return "Hi!";
    }
}

console.log(Person.eyes);
console.log(Person.language);
console.log(Person.speak());
console.log(Person["eyes"]);
console.log(Person["legs"]);