//1
console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.');
//2
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");
//3
let a ='10';
let b = 10;
if(a!==b)
{
    a = Number(a);
    console.log('Now , a and b are equal');
}
else
{
    console.log('a and b are already equal');
}

//4
let c =parseFloat('9.8');
let d = 10;

if(c===d)
{
    c = Number(Math.ceil(c));
    console.log('Now, c and d are equal'); 
}
else
{
    console.log("c and d are already equal");
}
//5
console.log('python'.includes('on'));
console.log('jargon'.includes('on'));
//6
let s ='I hope this course is not full of jargon';
console.log(s.includes('jargon'));
//7
let  ran = Math.floor(Math.random()*100)+1;
console.log(ran);
//8
function randomNumber(min,max)
{
    return Math.random*(max-min)+min;
} 
console.log(randomNumber(50,100));
//9
console.log(randomNumber(0,255));
//10
let j ='Javascript';
let x = Math.floor(randomNumber(0,j.length));
console.log(j.charAt(x));
//11
console.log('1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125');
//12
let t = 'You cannot end a sentence with because because because is a conjunction';
console.log(t.substr(31,23));


