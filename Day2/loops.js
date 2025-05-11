// for loop: print numbers from 1 to 5
for(let i=1;i<=5;i++){
    console.log(i)
}
// while: prime even numbers from 2 to 10
console.log("even values")
let a=1
while(a<=10){
    if(a%2==0){
        console.log(a)
    }
    a++;
}
// do while loop: print odd numbers from 1 to 10
console.log("odd values")
let b=1;
do{
    if(b%2==1){
        console.log(b)
    }
    b++;
}while(b<=10)


// for of loop : this is use to iterate on array 
console.log("printing array using for of loop")
let arr=[1,2,3,4,5,"hello"];
for ( let val of arr){
    console.log(val)
}

// for in loop : specially created for iterating over objects
let obj={
    name:"Arpta", 
    salary: "20LPA",
    class:"PMA"
}
for( let key in obj){
    console.log(key,":",obj[key])
}
// also u can use this to iterate on array 
for( let val in arr){
    console.log(val,":",arr[val])
}