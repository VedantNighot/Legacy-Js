// const coding = ["js","rb" ,"cpp" ,"java" , "Python"];

// coding.forEach( (item)=>{
//     console.log(item);
//  })

// coding.forEach( (item)=>{
//     console.log(item);
//  })

// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe())

// coding.forEach( (item , index , array)=>{
//     console.log(item , index , array);
//  })

const myCoding = [
    {
        languageName : "javaScript",
        LanguageFileName : "js"
    },
    {
        languageName : "python",
        LanguageFileName : "py"
    },
    {
        languageName : "java",
        LanguageFileName : ".java"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})