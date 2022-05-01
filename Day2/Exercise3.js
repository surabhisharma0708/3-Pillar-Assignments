//1
let s ='Love is the best thing in this world. Some found their love and some are still looking for their love.';

function countWords(str)
{
    let c=0;
    let arr = s.split(' ');
    for(i=0;i<arr.length;i++)
    {
        if(arr[i].match('love'))
        {
            c++;
        }
    }
    return c;
}

countWords(s);

//2
let t = 'You cannot end a sentence with because because because is a conjunction';
function countWords(str)
{
    let c=0;
    let arr = t.split(' ');
    for(i=0;i<arr.length;i++)
    {
        if(arr[i].match('because'))
        {
            c++;
        }
    }
    return c;
}
console.log(countWords(t));

//4
let x ='He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
function total(str)
{
    let ar = 10;
}