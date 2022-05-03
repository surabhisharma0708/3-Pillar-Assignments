//1.
let scores = prompt("Enter scores");
if(scores>=80 && scores<=100)
{
    console.log("A");
}
else if(scores>=70 && scores<=79)
{
    console.log("B");
}
else if(scores>=60 && scores<=69)
{
    console.log("C");
}
else if(scores>=50 && scores<=59)
{
    console.log("D");
}
else if(scores>=0 && scores<=49)
{
    console.log("F");
}

//2
let season = prompt("Enter season");
if(season==="September" ||season==="October" || season==="November")
{
    console.log("The season is Autumn");
}
else if(season==="December" ||season==="January" || season==="February")
{
    console.log("The season is Winter");
}
else if(season==="March" ||season==="April" || season==="May")
{
    console.log("The season is Spring");
}
else if(season==="June" ||season==="July" || season==="August")
{
    console.log("The season is Summer");
}

//3
let day = prompt("What is the today??");
if(day==="Saturday"|| day==="Sunday")
{
    console.log(`${day} is a Weekend.`);
}
else{
    console.log(`${day} is a working day.`)
}