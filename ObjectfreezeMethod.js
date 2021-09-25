var person = {
    name:"Tom"
};
Object.freeze(person);

console.log(Object.isFrozen(person)); //-> true