var person = {
    name:"Tom"
};
console.log(person.hasOwnProperty("name")); // -> true: 이 객체가 소유한 프로퍼티
console.log(person.hasOwnProperty("toString")); // -> false: 상속받은 프로퍼티