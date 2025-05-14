console.log(intro())  // hosting 
// function declaration
function intro(){
   return "hello i am human"
}

//console.log(statement())  // it's not completely hoisted 
// function expression 
let statement=function(){
    return "this is not human"
}
console.log(statement())
