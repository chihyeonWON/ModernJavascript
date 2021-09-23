var person = {
    name:"Tom"
};
Object.defineProperty(person,"name",{
    writable:false,
});
Object.getOwnPropertyDescriptor(person,"name");
//->value:"Tom",writable:false,enumeralbe:true,configurable:true