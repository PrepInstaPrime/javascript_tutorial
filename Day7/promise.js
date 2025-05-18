// promises: they are the javascript object which tells the states of execution or solves the problem of callback hell
let promise= new Promise((resolve, reject)=>{
    if(3>4){
        resolve("code executed")
    }else{
        reject("it's a failure")
    }
})
promise.then(msg=>console.log(msg)).catch(e=>console.log(e)).finally(()=>console.log("this is finally message "));


// promisify : allow you to convert a callback in promise