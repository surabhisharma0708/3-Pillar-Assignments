let date= new Date();
let yearr = date.getFullYear();
let month = date.getMonth();
let datee = date.getDate();
let hourss = date.getHours();
let minu = date.getMinutes();

month = (month<10?"0":"") +month;
datee = (datee<10?"0":"") +datee;
hours = (hours < 10 ?"0":"") + hours;
minu = (minu < 10 ? "0":"") + minu;
console.log(`${yearr}-${month}-${datee}  ${hourss}:${minu}`);