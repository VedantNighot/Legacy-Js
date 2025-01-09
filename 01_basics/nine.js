// Reduce 
// const myNums = [1,2,3,4,5,6,7,8,9];

// const myTotal = myNums.reduce((acc,curVal) => {
//     console.log(`accumulator:${acc} and CurrentValue ${curVal}`);
//     return acc + curVal; 
// },0)

// console.log(myTotal);
// const myNums = [1,2,3,4];
// const myTotal = myNums.reduce((accumulator,currenctValue)=>{
//     console.log(`acc: ${accumulator} and curr: ${currenctValue}`);
//     return accumulator+currenctValue;
// },0);
// console.log(myTotal); //10

// const myNums = [1,2,3,4];
// const myTotal = myNums.reduce((accumulator,currenctValue)=>{
//     console.log(`acc: ${accumulator} and curr: ${currenctValue}`);
//     return accumulator+currenctValue;
// });
// console.log(myTotal); //10

const myNums = [1,2,3,4];
let currVal = 0;
const myTotal = myNums.reduce((acc,currVal)=>acc+currVal);
console.log(myTotal);