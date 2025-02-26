// const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor);

Object.create(null)//by default null;
const chai = {
    name:"Ginger Chai",
    price: 250,
    isAvailable: true,
    orderchai:function(){
        console.log(`chai nhi bni`);
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// console.log(Object.getOwnPropertyDescriptor(chai, "price"));
// console.log(Object.getOwnPropertyDescriptor(chai, "isAvailable"));

Object.defineProperty(chai,'name',{
    // value:5,
    // writable:false,
    enumerable:true,
}
)
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let[key,value]of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}

// console.log(Math.PI); //Can not be overwrite