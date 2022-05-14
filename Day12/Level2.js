let arr = [];
let c =0;
function tenMostFrequentWords(pararray)
{
    for(let i=0;i<pararray.length;i++)
    {
        c=0;
        let pattern =new RegExp(pararray[i],'g');
        let res = para.search(pattern);
        arr.push({words:pattern,count:res});
    }
    
}
let para = "I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.";
let paga = para.split(" ");

tenMostFrequentWords(paga);

console.log(para.se);