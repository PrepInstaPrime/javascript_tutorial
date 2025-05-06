// block scope
/*{
    let a=5;  // block level , can't access outside the block
    const b=6; // block level , can't access outside the block
    var c=9;  // global level , can be accessed outside the block
}
// console.log(a)
// console.log(b)
console.log(c) */

// functional scope
/*function check(){
    let a=5;  // functional scope ,can't access outside of function
    const b=6; // functional scope ,can't access outside of function
    var c=9; // functional scope ,can't access outside of function
}
// console.log(a)
// console.log(b)
// console.log(c) */

// hoisting : accessing variable or functoin before its declaration 
console.log(a)  // this is accessible without value , so yes hoisting is possible
var a=5;
//console.log(b)  // error: Cannot access 'b' before initialization, why? becuase of TDZ 
// temporal dead zone has defined varaible, so let is hoisted but with TDZ error
// let b=6;
//console.log(c) // error: Cannot access 'b' before initialization, why? becuase of TDZ 
// temporal dead zone has defined varaible, so const is hoisted but with TDZ error
// let b=6;
const c=9;

