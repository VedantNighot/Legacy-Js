// Object Liternal
// const user = {
//     username :"Vedant",
//     logIn : 8,
//     signedIn:true,
//     getUserDetails : function(){
//         // console.log("God user details from database");
//         // console.log(`username: ${this.username}`);
//         console.log(this);
        
//     }
// }
// const usertwo = {
//     username :"Vedant",
//     logIn : 8,
//     signedIn:true,
//     getUserDetails : function(){
//         // console.log("God user details from database");
//         // console.log(`username: ${this.username}`);
//         console.log(this);
        
//     }
// }
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this); {}

// const promiseOne = new Promise();
// const date = new Date();

function user(username,loginCount,isLoggedIn){

    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;   
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this;
}
const userOne = new user("hitesh",23,true);
const usertwo =new  user("chaiaurcode",1,false);
// console.log(userOne.constructor);
// constructor reference for ourself
console.log(userOne);

// console.log(usertwo);