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
