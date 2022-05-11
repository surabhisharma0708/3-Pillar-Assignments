const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  };
//1

//2
let c = 0;
let k = Object.keys(users);
for(let i of k)
{
  if(i.isLoggedIn==true)
  {
    c++;
  }

}
console.log(c);

//3


//4
// let surabhi = {email:"surabhi@gmail.com",skills:['HTML','CSS','Javascript','Express'],age :19,isLoggedIn:true,points:60}; 
// let myadd =Object.assign({surabhi},users);
// console.log(myadd);
// //5
// let keys = Object.keys(users);
// //console.log(keys);
// //6
// let value = Object.values(users);
// //console.log(value);
// //7
// let countries ={
//   name: "India",
//   capital : "Delhi",
//   population : "1.3 crore",
//   language : "Hindi" 
// }
// //console.log(countries);