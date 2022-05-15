//1
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python'];
const skilss = JSON.stringify(skills,undefined,4);
console.log(skilss);
//2
let age = 250;
const ages = JSON.stringify(age,undefined,4);
console.log(ages);
//3
let isMarried = true
let marry = JSON.stringify(isMarried,undefined,4);
console.log(marry);
//4
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const stu = JSON.stringify(student,undefined,4);
console.log(stu);