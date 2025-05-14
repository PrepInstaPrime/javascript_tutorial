//date object is the way to get and update the dates on web pages 
console.log(Date.now()) // milliseconds : 1 jan 1970 
let cdate=new Date("2025-05-13T07:37:50");   // ISO: yyyy-MM-ddTHH:mm:ssZ
console.log(cdate.getFullYear())
console.log(cdate.getMonth()) // 0 stands for jan and 11 stands for dec
console.log(cdate.getTime())  // time in milliseconds
console.log(cdate.getDate()) // 13
console.log(cdate.getDay()) // 0 stands for sun and 6 stands for sat
console.log(cdate.getHours()) // 7
console.log(cdate.getMinutes()) // 37
console.log(cdate.getSeconds()) // 50
console.log(cdate.getMilliseconds()) // 0

let localDate= new Date();
console.log(localDate.getFullYear())
console.log(localDate.getMonth()) // 0 stands for jan and 11 stands for dec
console.log(localDate.toLocaleDateString()) // 13/5/2025
console.log(localDate.toLocaleTimeString()) // 7:37:50 AM
console.log(localDate.toLocaleString()) // 13/5/2025, 7:37:50 AM
console.log(localDate.toString()) // Tue May 13 2025 07:37:50 GMT+0530 (India Standard Time)


// just replace all get by set to update the time and dates
let date= new Date("2025-05-13T07:37:50");
date.setFullYear("2026")

console.log(date.getFullYear())