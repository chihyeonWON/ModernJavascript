var person = {
    name:"Tom"
};
console.log(person.hasOwnProperty("name")); // -> true: 이 객체가 소유한 프로퍼티
console.log(person.hasOwnProperty("toString")); // -> false: 상속받은 프로퍼티 toString Method는 Object.prototype에서 상속받은 메서드이며 person 객체에도 toString 메서드가 없기 때문에 hasOwnProperty는 false를 반환한다.