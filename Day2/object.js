// creation of object 
let student= {
    "name":"Muthu",
    "age":19,
    "class":"PMA"
}
// is it mandatory that key should we string? 
let obj={
    name:"yogant",
    age:19
}
// let have another object to get answer
// if key name is not a valid variable name then we have to use ""
let mentor={
    "first name":"Gaurav pandey",
    lecture: "JS"
}
console.log(student)
console.log(obj)
console.log(mentor)

// accessing the value from the object 
// using dot notation 
console.log(student.name);
//console.log(mentor.first name)  // if your key is not valid variable name then u can't use 
// dot notation
// using [ ]
console.log(mentor["first name"]);

// always remeber that [""] is better way

// accessing all the keysin  from the obj
console.log(Object.keys(student));  // this method gives all the keys in the form of array
// accessing all teh values from the obj in format of array
console.log(Object.values(student))
// converting objs to an array
console.log(Object.entries(student))


// adding new value in obj
mentor.address="Bangalore"
console.log("updated mentor objs", mentor)
// update the value in obj 
mentor.lecture="javascript"
console.log(mentor)
// delete the key from the obj
delete obj.name
console.log(obj)


// freeze method : prevents all the operations on the obj
Object.freeze(mentor)
mentor.name="hello"
delete mentor["first name"]
console.log(mentor)