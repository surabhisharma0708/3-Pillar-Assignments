//1
/* 
forEach : It is only used to iterate array elements.It takes a callback function with elements, index parameter and array itself.
map : It iterate an array elements and modify the array elements.
filter: It filter out items which full fill filtering conditions and return a new array.
reduce: Reduce takes a callback function. The call back function takes accumulator, current, and optional initial value as a parameter and returns a single value. It is a good practice to define an initial value for the accumulator value. If we do not specify this parameter, by default accumulator will get array first value.
*/
//2
// callback function: A callback is a function which can be passed as parameter to other function.
//3
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
countries.forEach((ele)=>console.log(ele));
//4
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
names.forEach((ele)=>console.log(ele));
//5
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach((ele)=>console.log(ele));
//6
const newCount = countries.map((ele)=>ele.toUpperCase());
console.log(newCount);
//7
const len = countries.map((ele)=>ele.length);
console.log(len);
//8
const sqr = numbers.map((ele)=>ele**2);
console.log(sqr);
//9
const namess = names.map((ele)=>ele.toUpperCase())
console.log(namess); 
//10
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]
const prices = products.map((ele)=>ele.price);
console.log(prices);
//11
const country = countries.filter((ele)=>ele.includes("land"));
console.log(country);
//12
const countrry =countries.filter((ele)=>ele.length===6);
console.log(countrry);
//13
const countrryy =countries.filter((ele)=>ele.length>=6);
console.log(countrryy);
//14
const count =countries.filter((ele)=>ele.startsWith("E"));
console.log(count);
//15
const val = products.filter((ele)=>ele)
console.log(val);
//16
let arr = [5,'abx',6,'def',true];
let newar =[];
function getStringLists(ar)
{
    newar.push(ar.forEach((ele)=>typeof(ele)==='string'));
}
getStringLists(arr);
console.log(newar);
//17
//18
//19
/* 
every : Check if all the elements are similar in one aspect. It returns boolean
some : Check if some of the elements are similar in one aspect. It returns boolean
*/
//20