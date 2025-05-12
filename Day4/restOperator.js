// rest operator (...)
let arr=[1,2,3,4,5,6,7];
// i want to destructure the value of arr into four variables a,b,c,d
// rest operator always comes to left
let [a,b,c,...d]=arr;  // a=1, b=2, c=3, d=[4,5,6,7]
// rest operator always comes at last varaible otherwise that will cause an error
console.log(a)
console.log(b)
console.log(c)
console.log(d)


function add(a,b){
    return a+b;
}
console.log(add(5,6,7))  // 7 has skipped 

// what if we want to pass n number of arguments 
function sum(...arr){  // here we can pass n number of argument and they 
    // will be stored in arr ( an array because of rest operator)
    let total=0;
    for( let i=0;i<arr.length;i++){
        total+=arr[i];
    }
    return total;
}
console.log(sum(1,2,3));
console.log(sum(1,2,3,4,5,6,7,8,9))

// great body go to gym, same in brain we have gray matter 