var possible ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var txt="";
var len =prompt("Enter the length");
for(c=0;c<len;c++)
{
    txt=txt+ possible.charAt(Math.floor(Math.random()*possible.length));
}

console.log(txt);