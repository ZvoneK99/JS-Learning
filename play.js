const person = {
    name: 'Zvone',
    age: 25, 
    greet() {
        console.log("Hi I am "+this.name);
    }
};

person.greet();

const copiedPerson = {...person};
console.log(copiedPerson);


const hobbies = ["Nogomet", "Kuhanje"];
/*for(let hobby of hobbies) {
    console.log(hobby);
}*/

/*console.log(hobbies.map(hobby => 'Hobby: '+hobby));
console.log(hobbies);*/
//const copiedArray = hobbies.slice();
const copiedArray = [...hobbies];
console.log(copiedArray);

const toArray = (...args) => {
    return args;
};

console.log(toArray(1,2,3,4,5,6,7));
