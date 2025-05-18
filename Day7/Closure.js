function help(){
    let a=5;
    return function (){
        let b=5;
        return a+b;
    }
}
let callHelp=help();  // default: it should destroy the the property of help
console.log(callHelp())  // 10  : becuase of closure , here u get 10, means you can access 
// the value of a even after help has returned 


// example 2
function test(){
    let count=0;
    return function (){
        count++;
        return count;
    }
}
let count=test();
console.log(count())// 1
console.log(count()) // 2