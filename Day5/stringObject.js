let str1= new String("hello")
let str2="hello";
console.log(typeof str1)
console.log(typeof str2)
console.log(str1)
console.log(str2)
console.log(str1===str2)
console.log(str1==str2)
// all the methods are applicabel for string object
// why? becuase js convert it to string and then performs operation and back again converts 
// to string object
console.log(str1.toUpperCase())