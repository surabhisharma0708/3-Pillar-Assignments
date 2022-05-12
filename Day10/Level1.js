//1
const set = new Set();
//2
for(let i=0;i<10;i++)
{
    set.add(i);
}
//3
set.delete(5);
//4
set.clear();
//5
let arr =["Finland", "Helsinki","Sweden", "Stockholm","Norway"];
const sr = new Set(arr);
console.log(sr);
//6
const map = new Map();
for(let i =0;i<arr.length;i++)
{
    map.set(arr[i],arr[i].length);
}
console.log(map);

