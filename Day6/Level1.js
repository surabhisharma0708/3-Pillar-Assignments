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