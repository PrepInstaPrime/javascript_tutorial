let para1= document.getElementById('p1');
console.log("hello")
function changetext(){
    para1.innerText="this is new text";
    para1.style.color="red"
}
function makeCap(){
    para1.innerText=para1.innerText.toUpperCase();
}
function toggle(){
    let text=para1.innerText;
    if(text=="this is original text"){
        para1.innerText="hello sir"
    }else{
        para1.innerText="this is original text"
    }
}