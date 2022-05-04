//1
const ar =[];
//2
const ar2 = ["owl","peacock","cock","sparrow","flamingo","parrot"];
//3
console.log(ar2.length);
//4
console.log(ar2[0]);
console.log(ar2[ar2.length/2]);
console.log(ar2[ar2.length-1]);

//5

let mixedDataTypes =["name",1,2,[4,5,6],{name:"surabhi,age:19"}, "class"];
//6
let companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle" ,"Amazon"];
//7
console.log(companies);
//8
console/length(companies.length);
//9
console.log(companies[0]);
console.log(companies[Number((companies.length)/2)]);
console.log(companies[ar2.length-1]);
//10
for(let company of companies)
{
    console.log(company);
}
// 11

for(let company of companies)
{
    console.log(company.toUpperCase());
}
//12
let str = companies.toString();
console.log(str);
// 13
let com = "AWS";
for(let company of companies)
{
    if(company===com)
    {
        console.log(company);
    }
    else
    {
        console.log("Not Found");
    }
}
//14
let s =0;
let newar = [];
for(let company of companies)
{
    s=0;
    for(let i=0;i<=company.length;i++)
    {
        if(company[i]=='o')
        {
            s++;
        }
        
    }
    if(s>0)
    {
        newar.push(company);
    }
}
console.log(newar);
//15
companies.sort();
console.log(companies);
//16
companies.reverse();
console.log(companies);
//17
console.log(companies.slice(0,3));
//18
console.log(companies.slice(companies.length-3,companies.length));
//19

//20
companies.shift();
//21

//22
companies.pop();

//23
companies.splice();
