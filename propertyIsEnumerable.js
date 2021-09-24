var person1 = {
    name:"Tom",
    age:17
};
var person2 = Object.create(person1);
person2.name = "Huck";
console.log(person2.propertyIsEnumerable("name")); //-> true: 이 객체가 소유한 열거 기능
console.log(person2.propertyIsEnumerable("age")); // -> false: 상속받은 프로퍼티
console.log(Object.prototype.propertyIsEnumerable("toString")); // -> false:열거할 수 없는 프로퍼티
