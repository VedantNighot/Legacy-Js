// const user = {
//     username: "Vedant" ,
//     price : 999,

//     welcomeMessage:function(){
//         console.log(`${this.username} , Welcome to website `);
//         console.log(this)
//     }

// }
// user.welcomeMessage();
// user.username ="sam"; 
// user.welcomeMessage();

// console.log(this);
  function chai(){
    let username = "vedant";
    console.log(this.username);
  }
  chai();