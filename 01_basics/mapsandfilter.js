// const coding = ["js","ruby","java","python","cpp"]
// const value = coding.forEach((Item)=>{
//     // console.log(Item)
//     return Item;
// })
// console.log(value);

// const myNums = [1,2,3,4,5,6,7,8,9];

// const neNums = myNums.filter((num) => {
//     return num>4 ;
// })
// console.log(neNums);

// const newNums = [];
// myNums.forEach((num)=>{
//     if (num>4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// for(const key in books){
//     console.log(books[key]);
// } to access all objects

// const userBooks = books.filter((bk)=> bk.genre==='History');
// console.log(userBooks);

// const userbooksf = books.filter((bk) => bk.genre === 'Fiction');
// console.log(userbooksf);

// const userbooksnf = books.filter((bk)=> bk.genre === 'Non-Fiction');
// console.log(userbooksnf);

// const userbooksS = books.filter((bk) => bk.genre === 'Science');
// console.log(userbooksS);

// const Pdate = books.filter((bk) => bk.publish  > 2000);
// console.log(Pdate);

// const Pdate = books.filter((bk)=>bk.publish === 1992);
// console.log(Pdate); //Book Two

// const AllBooks = books.forEach((Items) => {
//     console.log(AllBooks);    
// }) error

// for(const bk in books){
//     console.log(books[bk]);
// } will give all objects inside the array or object

// for(const [item,key] in book){
//     console.log(`contains the key values pai r${key} it contains this ${book[key]}`);
// } error

// const  double = books.filter((bk)=>{return bk.genre==='History' && bk.publish >= 1995})
// console.log(double); 
