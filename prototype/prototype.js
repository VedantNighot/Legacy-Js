// Goal :- 
let myName = "Vedant     "
let mychannel = "chai     "
console.log(myName.trim().length);

// console.log(myName.trueLength); How to make it

// let myHeros = ["Thor","Spiderman"];

// let heroPower = {
//     thor:"Hammer",
//     spiderman: "sling",
//     getSpiderPower:function(){
//         console.log(`Spidey power is ${this.spiderman}`);
//     }
// }

// Object.prototype.hitesh = function(){
    // console.log(`hitesh is resent in all objects ${this.spiderman}`);
    // console.log(`hitesh is resent in all objects`);
    
// }
// Array.prototype.heyHitesh = function(){
    // console.log(`Hitesh says hello`);
    
// }
// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh();
// heroPower.heyHitesh(); Code fail

// Inheritance by using __Proto__
const User = {
    name:"vedant",
    email:"vedantnighotzzz1@gmail.com",
}
const Teacher = {
    makeVideo :true
}
const TeachingSupport = {
    isAvailable :false
}
const TASupport = {
    makeAssignment :'JS assignment',
    fullTime: true,
}
Teacher.__proto__ = User;

// MoDER SYNTAX :
   Object.setPrototypeOf(TeachingSupport,Teacher);

   
   let anotherUsername = "chaiAurCode   "
   String.prototype.trueLength = function(){
       console.log(`${this}`);
    //    console.log(`${this.name}`);
       console.log(`True Lenth is: ${this.trim().length} `);
    }
    
    anotherUsername.trueLength();
    "Vedant".trueLength();