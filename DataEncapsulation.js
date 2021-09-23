var person = (function() {
    var _name = "Tom";
    return {
        get name() {
            return _name;
        },
        set name(value) {
            var str = value.charAt(0).toUpperCase() + value.substring(1);
            _name = str;
        }
    };
})();
console.log(person.name); // Tom
person.name = "huck";
console.log(person.name); // Huck