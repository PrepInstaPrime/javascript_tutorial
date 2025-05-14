// default parameters are used when value is not passed in the arguments or if we get the 
// value from the parameter then we use it
let add=(a=5,b=0,c=4)=>a+b+c  // c will have default value and a, b will updated by argument
console.log(add(3,4))
// console.log(3+4+undefined)
// console.log(undefined-1)  // NaN : not a number