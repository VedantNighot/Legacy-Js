// const coding = ["js","ruby","java","python","cpp"]
// const value = coding.forEach((Item)=>{
//     // console.log(Item)
//     return Item;
// })
// console.log(value);

const myNums = [1,2,3,4,5,6,7,8,9];

// const neNums = myNums.filter((num) => {
//     return num>4 ;
// })
// console.log(neNums);

const newNums = [];
myNums.forEach((num)=>{
    if (num>4) {
        newNums.push(num)
    }
})
console.log(newNums);
