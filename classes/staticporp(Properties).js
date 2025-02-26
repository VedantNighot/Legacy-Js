class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username:${this.username}`);
    }
    // Due to Static keyword there is an error
    //Wont Give access others; 
    static createId(){
        return `123`
    }
}   

class Teacher extends User{
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}
const vedant = new User("Vedant");
// console.log(vedant.createId());
const iPhone = new Teacher("iPhone","i@phone.com");
iPhone.logMe();
console.log(iPhone.createId());
