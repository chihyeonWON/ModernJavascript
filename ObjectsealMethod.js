var person = {
    name:"Tom"
};
Object.seal(person);
delete person.name;
/*Object.defineProperty(person,"name",{
    enumerable:false
}); */
console.log("name" in person); // -> true:name이 삭제되지 않았음
console.log("age" in person); //-> false:age가 추가되지 않았음
console.log(Object.getOwnPropertyDescriptor(person,"name"));
//-> {value:"Tom" writable:true, enumerable:true, configurable:false}
person.name = "Huck";
console.log(person); //-> Object{name:"Huck"}

console.log(Object.isSealed(person)); // -> true 