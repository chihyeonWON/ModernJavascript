var group = {
    groupName:"Tennis circle"
};
var person = Object.create(group);
person.name = "Tom";
person.age = 17;
person.sayHello = function() {
    console.log("Hello!"+ this.name);
};
Object.defineProperty(person,"sayHello",{
    enumerable:false
});
console.log(Object.keys(person)); //-> ["name","age"]