var x = require("./countries.js");
var y = require("./webTechs.js");
const ages = [19,22,19,24,20,25,26,24,25,24];
//1
ages.sort();
// min and max age
console.log("Minimum age is :"+ages[0]);
console.log("Maximum age is :"+ages[ages.length-1]);
//median age
let len = ages.length;
if(len%2==0)
{
    console.log(ages[(len/2)]);
    console.log(ages[(len-2)/2]);
}
else
{
    console.log(ages[(len-1)/2]);
}
//average age
let sum=0;

for(let s in ages)
{
    sum =sum+s;
}
console.log("Average age is :"+Number(sum/ages.length));

//range of ages
console.log(`Range is :${ages[0]}-${ages[ages.length-1]}`);

//slicing of top 10 countries
console.log(`The top 10 countries are : ${x.slice(0,10)}`);

//2
let x_len = x.length;
if(x_len%2==0)
{

}
else
{
    console.log()
}
//3

let ar1=[];
let ar2=[];
if(x_len%2==0)
{
    ar1=x.slice(0,x_len/2);
    ar2=x.slice((x_len/2)+1,x_len);
}
else
{
    x.unshift("China");
}

