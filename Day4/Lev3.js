let month = prompt("Enter the month");
month =month[0].toUpperCase()+month.slice(1).toLowerCase();
console.log(month);

if(month==="January" || month==="March" || month==="May" ||month==="July"|| month==="August"||month==="October" || month==="December")
{
    console.log(`${month} has 31 days`);
}
else if(month==="February")
{
    console.log(`${month} has 28 days`);
}
else if(month==="April" || month==="June" || month==="September" || month==="November")
{
    console.log(`${month} has 30 days`);
}