//1
let max_size =10;
var possible ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var txt="";
var len =Math.random()*(max_size-1)+1;
for(c=0;c<len;c++)
{
    txt=txt+ possible.charAt(Math.floor(Math.random()*possible.length));
}

console.log(txt);
//2

let hexChar = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
let len1 = Math.random()*(max_size-1)+1;
let hex_txt="";
for(c=0;c<len;c++)
{
    hex_txt += hexChar[Math.floor(Math.random()*16)];

}
console.log(hex_txt);
