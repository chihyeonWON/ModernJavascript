var person = {
    name:"Tom",
    age:17,
    sayHello: function(){
        console.log("Hello !"+this.name);
    }
};
Object.defineProperty(person,"sayHello",{
    enumerable:false
});
for(var p in person) console.log(p); // name,age ~순서대로 표시됨
