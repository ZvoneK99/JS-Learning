var name = "Zvone";
var age = 25;
var hasHobbies = true;
/*console.log(name);
console.log(age);
console.log(hasHobbies);*/

function summarizeUser(userName, userAge, userHasHobbiy) {
    return ('Ime: '+userName+" Godine: "+userAge+", Hobi: "+userHasHobbiy);
}

console.log(summarizeUser(name, age, hasHobbies));