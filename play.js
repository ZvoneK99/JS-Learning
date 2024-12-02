const name = "Zvone";
let age = 25;
const hasHobbies = true;

age = 30;
/*console.log(name);
console.log(age);
console.log(hasHobbies);*/

function summarizeUser(userName, userAge, userHasHobbiy) {
    return ('Ime: '+userName+" Godine: "+userAge+", Hobi: "+userHasHobbiy);
}

console.log(summarizeUser(name, age, hasHobbies));