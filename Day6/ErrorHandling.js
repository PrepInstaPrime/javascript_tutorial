// console.log(5/0)
// console.log("hello")
// console.log(eval("5+3+h"))// causes server crash
try{
    // this is the block where error can be expected
    console.log("hell")
    // throw new Error("this is error")
    console.log(eval("5+3+h"))
    
}catch(e){
    console.log(e)
}
finally{
    console.log('this will always run')
}

console.log("this is the furthure code ")