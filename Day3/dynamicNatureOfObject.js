// you can perform any type of operation in object and this property is known as dynamic nature of objects

let obj={
    name:"Test",
    intro: function (){
        console.log("Hey! i am coming from obj ")
    }
}
obj.age="20"
console.log(obj)
console.log(obj.intro)
obj.intro()