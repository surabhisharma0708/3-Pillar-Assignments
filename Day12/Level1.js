//1
let txt ='He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
let pattern = /\d{4,6}/g;
let matches = txt.match(pattern);
let total =0;
for(let i=0;i<matches.length;i++)
{
    total+=Number(matches[i]);
}
console.log(total);

//2
let points = ['-12', '-4', '-3', '-1', '0', '4', '8'];
let sortedPoints =[];
for(let i=0;i<points.length;i++)
{
   sortedPoints.push(Number(points[i]));
}
sortedPoints.sort(function(a,b){return a-b});
let a =Math.abs (sortedPoints[0]);
let b =Math.abs(sortedPoints[sortedPoints.length-1]);
console.log("distance"+a+b);
