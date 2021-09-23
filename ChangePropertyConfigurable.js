var person = {
    name:"Tom",
    age:17,
    sex:"남"
};
Object.defineProperty(person,"age",{
    configurable:false
});
delete person.age;
console.log(person.age); // 17
Object.defineProperty(person,"age",{
    enumarable:false
});
//-> Uncaught TypeError: Cannot redefine property:age
Object.defineProperty(person,"age",{
    writable:false
});