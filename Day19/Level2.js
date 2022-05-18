function outer()
{
    let c =5;
    function inner1()
    {
        c++;
        return c;
    }
    
    function inner2()
    {
        c=c+2;
        return c;
    }
    
    function inner3()
    {
        c=c+3;
        return c;
    }
    return {
        in1:inner1(),
        in2:inner2(),
        in3:inner3()
    }
}
const inns = outer();
console.log(inns.in1);
console.log(inns.in2);
console.log(inns.in3);
