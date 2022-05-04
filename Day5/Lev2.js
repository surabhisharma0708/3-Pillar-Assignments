//1
var x = require("./countries.js");
var y = require("./webTechs.js");

//2
let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
var regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
text = text.replace(regex,"");
let words = text.split(" ");
console.log(words);
console.log(words.length);


//3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
if(!(shoppingCart.includes("Meat")))
{
    shoppingCart.unshift("Meat");
}

if(!(shoppingCart.includes("Sugar")))
{
    shoppingCart.unshift("Sugar");
}
// let ask = prompt("Are you allergic to Honey??");
// if(ask==="Yes")
// {
//     let p =shoppingCart.indexOf("Honey");
//     shoppingCart.splice(p,p+1);
// }

let index = shoppingCart.indexOf("Tea");
shoppingCart[index] = "Green Tea";
console.log(shoppingCart);
//4

if(x.includes("Ethiopia"))
{
    console.log("ETHIOPIA");
}
else
{
    x.push("Ethiopia");
}

//5
if(y.includes("Sass"))
{
    console.log('Sass is a CSS preprocess');
}
else
{
    y.push("Sass");
}
console.log(y);


//6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];

let fullstack = frontEnd.concat(backEnd);
console.log(fullstack);