// const PromisesOne = new Promise(function(resolve,reject){
//     // Do a async task
//     // DB calls , cryptography, network
//     setTimeout(function(){
//         console.log('Async task is completed');
//         resolve();
//     },1000);
// });
// PromisesOne.then(()=>{
//     console.log("promises Consumed");
// });

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Async task 2");
//         resolve();
//     },2000)
// }).then(()=>{
//     console.log("Async 2 Resolved");

 
// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false;
//         if (!error) {
//             resolve({username:"Vedannt",password:"123"})
//         }else{
//             reject('ERROR: Something Went Wrong')
//         }
//     },1000);
// })
// promiseFour.then((user)=>{
// // How to avoid Callback Hell
//     console.log(user);
//     return user.username    
// }).then((username)=>{
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(()=>{
//     console.log("Finally The promise is either resolved aur solved");  
// })


// const promiseFive = new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({username:"Javascript",password:"123"});
//         }else{
//             reject('ERROR: JS Went Wrong')
//         }
//     },1000)
// })
// async function consumePromiseFive(params) {
//    try {
//     const response = await promiseFive
//    } catch (error) {
//     console.log(error);
//    }
// }
// consumePromiseFive();

// async function getAllUser(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data =await response.json();
//         console.log(data);
          
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUser()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    console.log(response);
    return response.json;
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log('ERROR OCCURED');
})