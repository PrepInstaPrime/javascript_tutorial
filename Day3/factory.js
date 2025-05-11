// when a fuctions returns an object that is known as factory function
function student(name, age, course, subject){
    return{
        Name:name,
        age,
        course,
        subject
    }
}
let std1=student("Arpita", 20, "PMA", "JS")
let std2= student("Anvi", 20, "PMA", "JS")
console.log(std1)
console.log(std2)