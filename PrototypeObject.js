function F() {

};
console.log(F.prototype); // => Object {}

F.prototype.prop = "prototype value";
var obj = new F();
console.log(obj.prop); // => prototype value

obj.prop = "instance value";
console.log(obj.prop); // => instance value
console.log(F.prototype.prop); // => prototype value