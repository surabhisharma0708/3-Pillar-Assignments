//1
let student = {
    firstName:"Surabhi",
    lastName:"Sharma",
    age:19,
    country:'India',
    city:'Delhi',
    skills: ['HTML', 'CSS', 'JS', 'React']
};
let stu_json = JSON.stringify(student,undefined,4);
localStorage.setItem('details',stu_json);
