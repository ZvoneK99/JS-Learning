const person = {
    name: 'Zvone',
    age: 25, 
    greet() {
        console.log("Hi I am "+this.name);
    }
};

person.greet();

const hobbies = ["Nogomet", "Kuhanje"];
/*for(let hobby of hobbies) {
    console.log(hobby);
}*/

console.log(hobbies.map(hobby => 'Hobby: '+hobby));
console.log(hobbies);