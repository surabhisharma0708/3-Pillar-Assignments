// //1
// let max_size =10;
// var possible ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
// var txt="";
// var len =Math.random()*(max_size-1)+1;
// for(c=0;c<len;c++)
// {
//     txt=txt+ possible.charAt(Math.floor(Math.random()*possible.length));
// }

// console.log(txt);
// //2

// let hexChar = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
// let len1 = Math.random()*(max_size-1)+1;
// let hex_txt="";
// for(c=0;c<len;c++)
// {
//     hex_txt += hexChar[Math.floor(Math.random()*16)];

// }
// console.log(hex_txt);
//3
// var num = Math.round(0xffffff * Math.random());
//   var r = num >> 16;
//   var g = num >> 8 & 255;
//   var b = num & 255;
//   console.log ('rgb(' + r + ', ' + g + ', ' + b + ')');

//4
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
];
let new_countries = [];
for(let c of countries)
{
    new_countries.push(c.toUpperCase());
}
console.log(new_countries);
//5
let coun_len = [];
for(let c of countries)
{
    coun_len.push(c.length);
}
console.log(coun_len);
//6
let new_c =[];
for(let c of countries)
{
    new_c.push([c,c.slice(0,3).toUpperCase(),c.length]);
}
console.log(new_c);
//7
let ar = [];
for(let c of countries)
{
    if(c.includes('land'))
    {
        ar.push(c);
    }
}
console.log(ar);

//8
let ar1=[];
for(let c of countries)
{
    if(c.endsWith('ia'))
    {
        ar1.push(c);
    }
}
console.log(ar1);
//9
let max_len = countries[0].length;
let txtt ='';
for(let c of countries)
{
    if(c.length>max_len)
    {
        max_len=c.length;
        txtt=c;
    }
}
console.log(txtt);
//10
let ar2=[];
for(let c of countries)
{
    if(c.length==5)
    {
        ar2.push(c);
    }
}
console.log(ar2);
//11
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
];

max_len = webTechs[0].length;
txtt ='';
for(let c of webTechs)
{
    if(c.length>max_len)
    {
        max_len=c.length;
        txtt=c;
    }
}
console.log(txtt);
//12
let ar3=[];
for(let c of webTechs)
{
    ar3.push([c,c.length]);
}
console.log(ar3);
//13
const mernStack = ['MongoDB', 'Express', 'React', 'Node']
let t ='';
for(let c of mernStack)
{
    t+=c.charAt(0);
}
console.log(t);
//14
for(let c of mernStack)
{
    console.log(c);
}
//15
let fruit_arr =['banana', 'orange', 'mango', 'lemon'];

let fruit_new = [];
for(let c of fruit_arr)
{
    fruit_new.unshift(c);
}
console.log(fruit_new);
