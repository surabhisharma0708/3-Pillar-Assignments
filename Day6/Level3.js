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
//1
let copy_count = countries;
//2
let sorted_countries = countries.sort();
console.log(sorted_countries);
//3
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
];
console.log(webTechs.sort());
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
console.log(mernStack.sort());
//4
let ar = [];
for(let c of countries)
{
    if(c.includes('land'))
    {
        ar.push(c);
    }
}
console.log(ar);
//5
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
//6
//same as 4
//7
let arr=[];
for(let c of countries)
{
    if(c.length==4)
    {
        ar.push(c);
    }
}
console.log(ar);
//8
let arrr=[];
for(let c of countries)
{
    if(c.length>=2)
    {
        arrr.push(c);
    }
}
console.log(arrr);
//9
let arr_new = [];
for(let c of countries)
{
    arr_new.unshift(c.toUpperCase());
}
console.log(arr_new);

