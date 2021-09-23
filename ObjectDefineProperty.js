var obj = {};
Object.defineProperty(obj,"name", {
    value:"Tom",
    writable:true,
    enumerable:false,
    configurable:true
});
Object.getOwnPropertyDescriptor(obj,"name");
// -> value:"Tom",writable:true,enumerable:false,configurable:true 