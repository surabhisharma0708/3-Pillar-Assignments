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
]
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
  
const mernStack = ['MongoDB', 'Express', 'React', 'Node']

//1
for(let i=0;i<=10;i++)
{
    console.log(i);
}
let j=0;
while(j<11)
{
    console.log(j);
    j--;
}
do
{
    console.log(j);
    j--;
}while(j>11)

//2

for(let i=10;i>=0;i--)
{
    console.log(i);
}
 j=10;
while(j>=0)
{
    console.log(j);
    j--;
}
let k =10
do
{
    console.log(k);
    k--;
}while(k>=0)

//3

let n = 5;
for(let x =0;x<n;x++)
{
    console.log(x);
}

//4
let str =""
for(i=1;i<=7;i++)
{
    for(j=0;j<i;j++)
    {
        str+="#";
        
    }
    console.log(str);
}
//5
for(let x =0;x<=10;x++)
{
    console.log(`${x}x${x}=${x*x}`);
}
//6
console.log(`i  i^2   i^3`);
for(let y=0;y<=10;y++)
{
    console.log(`${y}  ${y**2}      ${y**3}`);
}
//7
let c;
for(c=0;c<=100;c++)
{
    if(c%2==0)
    {
        console.log(c);
    }
}
//8
for(c=0;c<=100;c++)
{
    if(c%2!=0)
    {
        console.log(c);
    }
}
//9
for(c=0;c<=100;c++)
{
    let flag=0;
    for(let c1=2;c1<=i;c1++)
    {
        if(c%c1==0)
        {
            flag=1;
            break;
        }
    }
    if(i>1 && flag==0)
    {
        console.log(i);
    }
    
}
//10
let sum=0;
for(c=0;c<=100;c++)
{
    sum=sum+c;
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}`);
//11
let sum_even=0;
let sum_odd=0;
for(c=0;c<=100;c++)
{
    if(c%2==0)
    {
        sum_even+=c;
    }
    else
    {
        sum_odd+=c;
    }
}
console.log(`The sum of all evens from 0 to 100 is ${sum_even}. And the sum of all odds from 0 to 100 is ${sum_odd}.`);

//12
let sum_arr=[sum_even,sum_odd];
console.log(sum_arr);

//13
let ran_arr=[];
for(c=1;c<5;c++)
{
    ran_arr.push(Math.floor(Math.random()));
}
console.log(ran_arr);