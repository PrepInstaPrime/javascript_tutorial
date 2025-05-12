// value type(primitive data type): stored in stack memory 
let a=5;
let b=a;
console.log("before updating b")
console.log(a)
console.log(b)
b=8;
console.log("after updating b")
console.log(a) // the value of a has not updated becuase of b ( value type)
console.log(b)


// reference type ( non primitive data type): stored in heap memory
let arr=[1,2,3]
let carr=arr;
console.log("before changing copied array")
console.log(arr)
console.log(carr)
carr.push(4)
console.log("after changing copied array")
console.log(arr)  // original array also has been changed
console.log(carr)  
