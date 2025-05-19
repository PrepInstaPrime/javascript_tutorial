let arr=[1,2,3,4,5];
let len=arr.length-1;
let sum=arr.reduce((acc,val,idx,arr)=>{
    console.log(acc)
    // console.log(arr[len])
    return acc+arr[len--]
},-10)
console.log(sum)