// const cats =['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

// function toUpper(str)
// {
//     return str.toUpperCase();
// }
// const upperCats =cats.map(toUpper);
// console.log(upperCats);

// function lcat(st)
// {
//     return st.startsWith('L');
// }
// const filtered = cats.filter(lcat);
// console.log(filtered);

// let original =[1,2,3];
// let doubled = original.map(item=>tem*2);
// console.log(doubled);


// const callback = (n) =>{
//     return n**2;
// } 

// function cube(callback,n)
// {
//     return callback(n)*n;

// }
// console.log(cube(callback,3));

// //returning
// const higherOrder = n=>{
//     const doSomething =(m)=>{
//         const doWhatEver =(t)=>{
//             return n+m+t;
//         }
//         return doWhatEver;
//     }
//     return doSomething;
// }
// console.log(higherOrder(5)(4)(7));

// //
// arr = [1,2,3,4,5]
// arr.forEach(element => {
//     console.log(element);
// });

// const countries =['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];
// countries.forEach((element)=> {
//     console.log(element.toUpperCase);
// })
// //map
// const newnum = arr.map((element)=> element*element);

// //every
// const areAllString =countries.every((name)=> typeof name ==='string');
// console.log(areAllString);
//find
const ages = [10,20,30,12,5,63];
const age = ages.find((ele)=>ele<20)
console.log(age);

const scores = [
    { name: 'Asabeneh', score: 95 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
  ];
  const score = scores.find((user)=>user.score>80)
  console.log(score);


const lessage = ages.findIndex((age)=>age>30)
console.log(lessage);

//some
