class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        // User.call(this,username);
        //elses
        super(username);
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`A new Course added by ${this.username}`);        
    }
}

const chai = new Teacher("Vedant","chai@teacher.com","123");
chai.addCourse();
chai.logMe();
const masalachai = new User("masalachai");
masalachai.logMe();
// masalachai.addCourse(); //Error
console.log(chai instanceof Teacher);
console.log(chai instanceof User);
console.log(masalachai instanceof User);
console.log(masalachai instanceof User);


