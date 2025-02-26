// ES6 ke bad
// class User{
// // Its a constructor
//     constructor(username,email,password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
// // Its a function
//     encryptPassword(){
//         return `${this.password}abc`;
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const chai = new User("vedant","chai@gmail.com","123");
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());
// Under the hood;
// Behind the Scene

function User(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function() {
    return `${this.password}abc`;
}
User.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}`;
}
const tea = new User("vedant","tea@gmail.com","123");
console.log(tea.encryptPassword());
console.log(tea.changeUsername());