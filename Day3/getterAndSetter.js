// getter and setter are used to provide more security to the data
let obj={
    name:"abc",
    age:20,
    password:"abcd@123",
    get cred(){
        console.log(this.password);
    },
    set updatename(newName){
        this.name=newName;
    }
}
// you don't need to use parenthesis becuase of getter and setter
obj.cred
obj.updatename="user"
console.log(obj)