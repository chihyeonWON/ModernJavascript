var person = {
    name:"Tom"
};
console.log("name" in person); // true : 이 객체가 소유한 프로퍼티
console.log("age" in person); // false : 이 프로퍼티가 없음
console.log("toString" in person); // true :person은 toString을 상속받았음
