let str="hello";

// string methods
// 1. searching methods 
console.log(str.includes("ll")) // true
console.log(str.startsWith("he")) // true
console.log(str.endsWith('lo')) // true
console.log(str.indexOf('o')) // 4 becuase this gives index of string and if not found it will
// give -1
console.log(str.lastIndexOf('l'));  // 3

// 2. extraction methods 
console.log(str.slice(-4,-1)) // ell : it can take positive and negative indexing and last index is excluded
console.log(str.substring(1,4))  // ell : it can't take negative indexes , rest is same
console.log(str.substr(1,4))  // depricated : not recomended to use

// 3. transform 
console.log(str.toLowerCase())
console.log(str.toUpperCase())


// other 
let arr= str.split('')  // converts string to an array
console.log(arr);
console.log(arr.join('')) // converting back again to string
console.log(str.repeat(3))
console.log(str.replace('l','p'));  // it is creating new string , original is still same
console.log(str.replaceAll('l','K'))
