//1
let ar = [1,2,3,4,5];
let len = ar.length;
console.time("for-loop")
for(let i=0;i<len;i++)
{
    console.log(ar[i]);
}
console.timeEnd("for-loop")

console.time("forEach-loop")
ar.forEach((ele)=>ele);
console.timeEnd("forEach-loop")

console.time("for-of-loop")
for(let i of ar)
{
    console.log(i);
}
console.timeEnd("for-of-loop")

console.time("while-loop")
while(len--!=0)
{
    console.log(ar[len]);
    
}
console.timeEnd("while-loop")
