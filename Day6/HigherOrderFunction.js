let arr=[1,2,3,4,5]; /*
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]*2);
// }
//1. forEach loop
// arr.forEach((val)=>console.log(val*2))
console.log("original array: ", arr)
// forEach iterate over each and every element of the array
let newArr=arr.forEach((val, idx, array)=>array[idx]=val*2)
console.log("updated array",arr)
console.log("return value from forEach", newArr)

*/

// 2. map function
/*
let mapArray=arr.map((val,idx,array)=>array[idx]-=2)
console.log("Orginal array", arr)
console.log("mapArray: ", mapArray)
*/


/*
// note : map does not normally update orginal array , unless u are doing manually
let mapArray= arr.map(val=>val*2);
console.log("Orginal array", arr)
console.log("mapArray: ", mapArray)
// Home work : difference btween map and forEach 
*/

/* 
// 3. filter: creates new array based on conditon
let even= arr.filter(val=>val%2===0)
console.log("orginal: ", arr)
console.log("filtered ", even)

*/
/*
// 4. find : will give u first matching value
let search=arr.find(val=>val===3)
console.log(search)
*/
/*
// 5. some: 
let checkSome=arr.some(val=>val%2==0);
console.log(checkSome)
*/

/*
// 6. every: check for every value , and if all satisfy the condition it returns true
let checkEvery=arr.every(val=>val%2==0);
console.log(checkEvery)
*/

// 7. reduce: this converts the whole array into single value

let sum=arr.reduce((acc,val)=>val*acc,5)
console.log(sum)