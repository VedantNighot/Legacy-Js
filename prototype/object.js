function multiplyBy5(num){
    this.num = num
    return num*5;
}

multiplyBy5.power=2
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);//{By default context set}


function createUser(username,score){
    this.username = username
    this.score = score
}
//check createUser
createUser.prototype.increment = function () {
    this.score ++ ;
}
//check createUser
createUser.prototype.printMe = function () {
    console.log(`price is ${this.score}`); //this means jis ne bhi 
}
const chai =new createUser("chai",25);
const tea = new createUser("Tea",250);

chai.increment()
chai.printMe();
/* 
Here's What Happens behind the Scenes When the new Keyword is used

A new Object is created: The new keyword initiates the creation of a new javascript object.

A prototype is linked : The Newly created object gets Linked to the prototype propert of the constructor function .This means that it has access to properties and methods defined on the constructor's Prototype.

The constructore is called : The cunstructor function is called with the specified agruments and this is bound the newly created object \.If no explicit return value is specified from the constructor ,Javascript assumes this, the newly created object , to be the intended return values.

The new object is returned : After the custroctor function has been called if it dosent return a non-primitive value (object,array,function etc)the newly created object is returned 

*/

