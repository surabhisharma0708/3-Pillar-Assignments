// // const cats =['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

// // function toUpper(str)
// // {
// //     return str.toUpperCase();
// // }
// // const upperCats =cats.map(toUpper);
// // console.log(upperCats);

// // function lcat(st)
// // {
// //     return st.startsWith('L');
// // }
// // const filtered = cats.filter(lcat);
// // console.log(filtered);

// // let original =[1,2,3];
// // let doubled = original.map(item=>tem*2);
// // console.log(doubled);


// // const callback = (n) =>{
// //     return n**2;
// // } 

// // function cube(callback,n)
// // {
// //     return callback(n)*n;

// // }
// // console.log(cube(callback,3));

// // //returning
// // const higherOrder = n=>{
// //     const doSomething =(m)=>{
// //         const doWhatEver =(t)=>{
// //             return n+m+t;
// //         }
// //         return doWhatEver;
// //     }
// //     return doSomething;
// // }
// // console.log(higherOrder(5)(4)(7));

// // //
// // arr = [1,2,3,4,5]
// // arr.forEach(element => {
// //     console.log(element);
// // });

// // const countries =['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];
// // countries.forEach((element)=> {
// //     console.log(element.toUpperCase);
// // })
// // //map
// // const newnum = arr.map((element)=> element*element);

// // //every
// // const areAllString =countries.every((name)=> typeof name ==='string');
// // console.log(areAllString);
// //find
// const ages = [10,20,30,12,5,63];
// const age = ages.find((ele)=>ele<20)
// console.log(age);

// const scores = [
//     { name: 'Asabeneh', score: 95 },
//     { name: 'Mathias', score: 80 },
//     { name: 'Elias', score: 50 },
//     { name: 'Martha', score: 85 },
//     { name: 'John', score: 100 },
//   ];
//   const score = scores.find((user)=>user.score>80)
//   console.log(score);


// const lessage = ages.findIndex((age)=>age>30)
// console.log(lessage);

//some

//JSON to object
const usersText = `{
  "users":[
    {
      "firstName":"Asabeneh",
      "lastName":"Yetayeh",
      "age":250,
      "email":"asab@asb.com"
    },
    {
      "firstName":"Alex",
      "lastName":"James",
      "age":25,
      "email":"alex@alex.com"
    },
    {
    "firstName":"Lidiya",
    "lastName":"Tekle",
    "age":28,
    "email":"lidiya@lidiya.com"
    }
  ]
  }`
  // const usersObj = JSON.parse(usersText,undefined,4);
  // console.log(usersObj);

//   const userObj = JSON.parse(usersText,(key,value)=>{
//     let newValue = typeof value==='string' && key!='email' ?value.toUpperCase():value
//     return newValue
//   })
// console.log(userObj);

// JSON.stringify
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
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'Redux',
      'MongoDB',
      'Express',
      'React',
      'Node'
    ],
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
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'MongoDB',
      'Express',
      'React',
      'Node'
    ],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

const txt = JSON.stringify(users,undefined,4);
console.log(txt);

//Promise

const doPromise = new Promise((resolve, reject)=>
{
  setTimeout(()=>{
    const skills =['HTML','CSS','JS'];
    if(skills.length>0)
    {
      resolve(skills)
    }
    else
    {
      reject('Something wrong has happened');
    }
  },2000)
})

doPromise.then(result=>{console.log(result)}).catch(error=>console.log(error));

let p = new Promise((resolve,reject)=>{
  let a = 1+1
  if(a==2)
  {
    resolve("Success");
  }
  else{
    reject("Failed");
  }
})

p.then((message)=>{
  console.log('This is in the then'+message);
}).catch((message)=>{
  console.log('This is in the catch '+message);
})