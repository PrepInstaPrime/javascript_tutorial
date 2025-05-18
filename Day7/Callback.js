// Syncronous : executing code line by line and do not execute furthure code if there is any previous code is being executed 
// Asyncronous: running multiple task parallelly and no task blocks the path of another 
// this can be achieved by using callback , promises , async await
/*
function add(a, aka) {
    let b = 5;
    let sum = a + b;
    console.log("sum: ", sum)
    aka();
}
function aka() {
    console.log("your code has executed successfuly")
}
add(5, aka);
*/

// callback hell
function method1(a, method) {
    setTimeout(() => {
        let b = 5;
        console.log("method1")
        method(a + b, method2);
    }, 1400)
}
function method(c, method2) {
    setTimeout(() => {
        let d = 7;
        console.log("method")
        method2(c + d, mehtod3);
    }, 1100)
}
function method2(e, method3) {
    setTimeout(() => {
        let f = 8;
        console.log("method 2")
        method3(e + f);
    }, 1200)
}
function mehtod3(sum) {
    setTimeout(() => {
        console.log("method3")
        console.log(sum);
    }, 1000)
}

setTimeout(() => {
    method1(4, method);
    console.log("hello after 2 second")
}, 2000)
console.log("hello normally")
let count=0;
setInterval(()=>{
    console.log(count++);
},1000)
