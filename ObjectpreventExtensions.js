var person = {
    name:"Tom"
};
Object.preventExtensions(person);
person.age = 17;
console.log("age" in person) // -> false

console.log(Object.isExtensible(person)); // -> false