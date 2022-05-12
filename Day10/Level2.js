let a = [1,2,3,4,5,6];
let b =[2,5,6,8,9,25];
let c = [...a,...b];
//1
let A = new Set(a);
let B = new Set(b);
let C = new Set(c);
console.log(C);

//2
let x = a .filter((ele)=> B.has(ele))
let X = new Set(x);
console.log(X);

//3
let m = new Map();
for(let i=0;i<a.length;i++)
{
    m.set(a[i],b[i]);

}
let s = new Set();
for(let [keys,vals] of m)
{
    s.add(keys+vals);

}
console.log(s);