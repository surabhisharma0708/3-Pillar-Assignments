//1.
let a = prompt('Enter the base Value');
let b = prompt('Enter the height value');
let area = 0.5*a*b;
console.log("The area of triangle is"+area);
//2.
let side_a =prompt('Enter the side 1');
let  side_b =prompt('Enter the side 2');
let side_c =prompt('Enter the side 3');

let peri=side_a+side_b+side_c;
console.log(peri);

//3.
let len =prompt('Enter the length');
let wid =prompt('Enter the width');
console.log(2*(len+wid));

//4.
let rad = prompt('Enter the radius');
let pi = 3.14;
let cir_area = pi*r*r;
let circum = 2*pi*r;
console.log(air_area);
console.log(circum);

//5.
// y=2x-2;
y=mx+c;

let slop1 = 0;
//6.
let x1=2;
let x2=6;
let y1=2;
let y2=10;
let slop2 = (y2-y1)/(x2-x1);
console.log(slop);

//7.

//8.
let y = x**2+6*x+9;
let aa = 1;
let bb = 6;
let c = 9;
let t = (-bb-Math.sqrt(bb**2-4*aa*c))/2*aa;
console.log(t);

//9.
let hours = prompt("Enter hours");
let rate = prompt("Enter rate");
let earning = hours* rate;
console.log(earning);

//10.
let name = prompt('Enter your name');

if(name.length>7)
{
    console.log("Name is long");
}
else
{
    console.log("Name is short");
}

//11.
let f_name ='Asabeneh';
let l_name ='Yetayeh';

console.log(`Your first name, ${f_name} is longer than your family name,${l_name} `);

//12.
let myAge = 250;
let yourAge = 25;
console.log(`I am ${myAge-yourAge} years older than you.`);

//13.

let year = prompt("Enter year");
let age = 2020-year;
console.log(`You are ${age}. You are old enough to drive`);

//14.
let num_years = prompt('Enter number of years you live');


//15.
let date= new Date();
let yearr = date.getFullYear();
let month = date.getMonth();
let datee = date.getDate();
let hourss = date.getHours();
let minu = date.getMinutes();

console.log(`${yearr}-${month}-${datee}  ${hourss}:${minu}`);
console.log(`${datee}-${month}-${yearr}  ${hourss}:${minu}`);
console.log(`${yearr}/${month}/${yearr}  ${hourss}:${minu}`);