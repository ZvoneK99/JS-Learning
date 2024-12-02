const person = {
    name: 'Zvone',
    age: 25, 
    greet() {
        console.log("Hi I am "+this.name);
    }
};

const printName = ({ name }) => {
    console.log(name);
}

printName(person);

const {name, age} = person;
console.log(name, age);
/*
person.greet();

const copiedPerson = {...person};
console.log(copiedPerson);
*/

const hobbies = ["Nogomet", "Kuhanje"];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);
/*
for(let hobby of hobbies) {
    console.log(hobby);
}

console.log(hobbies.map(hobby => 'Hobby: '+hobby));
console.log(hobbies);
const copiedArray = hobbies.slice();
const copiedArray = [...hobbies];
console.log(copiedArray);

const toArray = (...args) => {
    return args;
};

console.log(toArray(1,2,3,4,5,6,7));
*/