// shallow copy with array
// way 1
/*let arr=[1,2,3];
let carr=arr;
console.log("before updating copied array")
console.log(arr)
console.log(carr)
carr.push(4)
console.log("after updating copied array")
console.log(arr)  // it's being updated because of shallow copy
console.log(carr) */

// spread operator  -> deep copy ? answer : it performs deep copy only when you have 1D
/*let arr=[1,2,3];
let carr=[...arr];  // spread: ...
console.log("before updating copied array")
console.log(arr)
console.log(carr)
carr.push(4)
console.log("after updating copied array")
console.log(arr)  // it's not being updated because of deep copy
console.log(carr)
*/



/*
let arr=[1,2,3,[4,5,6]]; // deep copy ? no : it does not perform deep copy for 2D or linked array
let carr=[...arr];  // spread: ...
console.log("before updating copied array")
console.log(arr)
console.log(carr)
carr[3].push(9)
console.log("after updating copied array")
console.log(arr)  // it's being updated because of shallow copy
console.log(carr)
*/
// structuredClone : it's performing deep copy
/*let arr1=[1,2,3]
let arr2=structuredClone(arr1);
console.log("before updating copied array")
console.log(arr1)
console.log(arr2)
arr2.shift();
console.log("after updating copied array")
console.log(arr1)
console.log(arr2)
*/




// structuredClone : it works with nested arrays also 
/*
let arr1=[1,2,3,[4,5,6]]
let arr2=structuredClone(arr1);
console.log("before updating copied array")
console.log(arr1)
console.log(arr2)
arr2[3].shift();
console.log("after updating copied array")
console.log(arr1)
console.log(arr2)

*/

/*
let arr1=[1,2,3,[4,5,6],function add(){console.log("hello")}]
let arr2=structuredClone(arr1);  // this will cause an error because it can not copy functions
console.log("before updating copied array")
console.log(arr1)
// console.log(arr2)
// arr2[3].shift();
console.log("after updating copied array")
console.log(arr1)
// console.log(arr2)
*/

// deep copy : JSON.stringify and JSON.parse but they do not copy functions and undefied
/*
let arr1=[1,2,3,[4,5,6],function add(){console.log("hello")}]
let arr2=JSON.parse(JSON.stringify(arr1))  // JSON.stringify is converting array to string 
// JSON.parse again converting to array from string
console.log("before updating copied array")
console.log(arr1)
console.log(arr2)
arr2[3].shift();
console.log("after updating copied array")
console.log(arr1)
console.log(arr2)
// arr2[4]()  // you will get an error because functions was skipped
 */



// deep copy: coping the value : perfect ways ( recursion, lodash -> cloneDeep)
// import lodashMethod from 'lodash';
/*
const lodashMethod = require('lodash')
let arr1=[1,2,3,[4,5,6],function add(){console.log("hello")}]
let arr2=lodashMethod.cloneDeep(arr1);  
console.log("before updating copied array")
console.log(arr1)
console.log(arr2)
arr2[3].shift();
console.log("after updating copied array")
console.log(arr1)
console.log(arr2)
arr2[4]()
*/

// normal copy 
// spread operator 
// structuredClone
// JSON.stringify and JSON.parse
// lodash ( external library) -> deepClone method 
// another ways like looping or recursion




// now cloning with obeject
// shallow copy
/*
let obj={
    name:"arpita"
}
let std=obj;
console.log("before updating copied object")
console.log(obj)
console.log(std)
std.course="pma"
console.log("after updating copied object")
console.log(obj)  // this is also updated becuase of shallow copy
console.log(std)
*/


// deep copy -> spread operator : this only works for plan object. it does not perform deep 
// copy for nested object
/*
let obj={
    name:"arpita"
}
let std={...obj};
console.log("before updating copied object")
console.log(obj)
console.log(std)
std.course="pma"
console.log("after updating copied object")
console.log(obj)  // this is also updated becuase of shallow copy
console.log(std)
*/


/*
let obj={
    name:"arpita",
    address:{
        street:"103 idk",
        city:"bangalore"
    },
    intro: function (){
        console.log(`my name is ${this.name}`);
    }
}
let std={...obj};
console.log("before updating copied object")
console.log(obj)
console.log(std)
std.address.state="karnataka"  // changing original object becuase of shallow copy
console.log("after updating copied object")
console.log(obj)  // this is also updated becuase of shallow copy
console.log(std)

*/



// Object.assign() -> it will do deep copy for plane object only 
/*
let obj={
    name:"arpita",
    address:{
        street:"103 idk",
        city:"bangalore"
    },
    intro: function (){
        console.log(`my name is ${this.name}`);
    }
}
let std=Object.assign(obj);
console.log("before updating copied object")
console.log(obj)
console.log(std)
std.course="pma"
std.address.state="karnataka"  // changing original object becuase of shallow copy
console.log("after updating copied object")
console.log(obj)  // this is also updated becuase of shallow copy
console.log(std)

*/






// rest  same as array: structuredClone
// JSON.stringify and JSON.parse

// complete deep copy -> lodash -> cloneDeep
import method from 'lodash'
let obj={
    name:"arpita",
    address:{
        street:"103 idk",
        city:"bangalore"
    },
    intro: function (){
        console.log(`my name is ${this.name}`);
    }
}
let std=method.cloneDeep(obj);
console.log("before updating copied object")
console.log(obj)
console.log(std)
std.course="pma"
std.address.state="karnataka"  // changing original object becuase of shallow copy
console.log("after updating copied object")
console.log(obj)  // this is also updated becuase of shallow copy
console.log(std)