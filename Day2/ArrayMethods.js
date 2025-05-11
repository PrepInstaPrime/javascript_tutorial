let arr= [1,2,3,4,5];
// adding methods
// push method: this add an element at last
arr.push(6);
console.log("updated array after pushing new value: ", arr);
// unshift method : this adds the element at starting 
arr.unshift(0);
console.log("updated array after adding new value at front: ", arr)

// deletion methods
// pop: removes the last element
let lValue=arr.pop()
console.log("After removing last value", lValue, "from the array: ",arr)
// shift : deletes the first value 
let fValue=arr.shift();
console.log("after deleting the first value", fValue, "from the array", arr)


// important method 
// splice : it can delete and add the elements at a time
arr.splice(1,2);
console.log("after deletion using splice: ", arr)
// adding and deleting at a time
arr.splice(1,1,6,7,8);
console.log("updated array", arr)


// checking for the value
console.log(arr.includes(6));  // includes give true or false
console.log(arr.includes(10));
console.log(arr.indexOf(6));  // tells the index of particular value in the array
console.log(arr.indexOf(10))

// sorting method 
arr.push(11)
arr.sort() // it sorts the elements lexicographically 
console.log("normal sorting " ,arr)
arr.sort((a,b)=>a-b) 
console.log("sorting in ascending order", arr)
arr.sort((a,b)=>b-a) 
console.log("sorting in descending order", arr)
console.log("length of the array: ", arr.length)
// join method 
let str=arr.join(); // normally it gives comma seperated string
console.log(str, "and type of it: ", typeof str)
// star seperated or u can have any symbol 
let str1= arr.join('*')
console.log(str1)
// push, unshift, pop, shift, splice , includes, indexOf, sort, lenth, join