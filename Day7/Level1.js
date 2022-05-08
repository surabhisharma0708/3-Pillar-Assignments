//1
function fullName(name)
{
    console.log(`${name}`);
}
fullName("Surabhi");

//2
function fullNAme(first,last)
{
    console.log(`Full Name is : ${first} ${last}`);
}
fullNAme("Surabhi","Sharma");
//3
function addNumbers(num1,num2)
{
    console.log(`Sum is: ${num1+num2}`);
}
addNumbers(5,10);
//4
function areaOfReact(l,b)
{
    let a = l*b;
    console.log(`area is : ${a}`);
}
areaOfReact(10,20);
//5
function perimeterOfRectangle(l,b)
{
    let p = 2*(l+b);
    console.log(p);
}
perimeterOfRectangle(10,5);
//6
function volumeOfRectPrism(l,b,h)
{
    let v = l*b*h;
    console.log(v);
}
volumeOfRectPrism(10,5,6);
//7
let pi =3.14;
function area_circle(r)
{
    let a = pi*r*r;
    console.log("Ther area of circle is:"+a);
}
area_circle(7);
//8
function circumf(r);
{
    let c = 2*pi*r;
    console.log("The circumference of circle is:"+c);
}
circumf(7);
//9
function density(mass, volume)
{
    console.log("The denity is :"+mass/volume);
}
density(1000,100);
//10
function speed(dist,time)
{
    console.log("The speed is:"+dist/time);
}
speed(10,5);
//11
function weight(mass,gravity)
{
    console.log("The weight is:"+mass*gravity);
}
weight(1000,10);
//12
function celToFah(c)
{
    let t = (c*(9/5))+32;
}
celToFah(203);
//13
function BMI(w,h)
{
    let bmi = w/(h*h);
    if(bmi<18.5)
    {
        console.log("Underweight");
    }
    else if(bmi>18.5 && bmi<24.9)
    {
        console.log('Normal weight');
    }
    else if(bmi>25 && bmi<29.9)
    {
        console.log("Overweigh");
    }
    else if(bmi>=30)
    {
        console.log("Obese");
    }
}
BMI(40,5);
//14
function checkSeason(season)
{
    if(season=="March" || season=="April" || season=="May")
    {
        console.log("Spring");
    }
    else if(season=="June" || season=="July" || season=="August")
    {
        console.log("Summer");
    }
    else if(season=="September" || season =="October" || season == "November")
    {
        console.log("Autumn");
    }
    else if(season=="December" ||season =="January" || season=="Februry")
    {
        console.log("Winter");
    }
}
checkSeason("April");
//15

function findMax(a,b,c)
{
    if(a>b && a>c)
    {
        console.log(`${a}`);
    }
    else if(b>c && b>a)
    {
        console.log(`${b}`);
    }
    else if(c>a && c>b)
    {
        console.log(`${c}`);
    }
}
findMax(10,2,15);
