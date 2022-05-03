//1
let age = prompt("Enter your Age");
if(age>18)
{
    console.log('You are old enough to drive');
}
else
{
    console.log(`You are left with ${18-age} years to drive`);
}
//2
let myAge = prompt("Enter Age");
let yourAge = prompt("Enter your Age");

if(myAge>yourAge)
{
    console.log(`You are ${myAge-yourAge} years elder than me.`);
}
else
{
    console.log(`You are ${yourAge-myAge} years older than me.`);
}
//3
let a = prompt("Enter a");
let b = prompt("Enter b");

if(a>b)
{
    console.log(`${a} is greater than ${b}`);
}
else
{
    console.log(`${a} is smaller than ${b}`);    
}
console.log(a>b ? `${a} is greater than ${b}`:`${a} is smaller than ${b}`);

//4
let num = prompt("Enter a number");
if(num%2===0)
{
    console.log(`${num} is even`);
}
else
{
    console.log(`${num} is odd`);
}