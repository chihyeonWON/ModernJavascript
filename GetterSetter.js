var person = {
    _name:"Tom",
    get name() {
        return this._name;
    },
    set name(value) {
        var str = value.charAt(0).toUppearCase() + value.substring(1);
        this._name = str;
    }
}; 

console.log(person.name);  //Tom
person.name = "huck";  //접근자 프로퍼티에 값을 대입한다
console.log(person.name); // Huck