//1.
let fname = 'Surabhi';
let lname = 'Sharma';
let marital = 'Single';
let country ='India';
let age = 25;
let y = ['abc','xyz',10,20];
let z = {name: 'Surabhi',Age:25,City:'Narora'};
console.log(typeof(fname),typeof(age),typeof(y),typeof(z));

//2.
console.log('10'===10);
//3.
console.log(parseInt('9.8')===10);
//4.
console.log(10>5);
console.log(10===10);
console.log(8>=7);

console.log(10>11);
console.log(5==='xyz');
console.log(10!=10);

//5.
console.log(4>3);
console.log(4>=3);
console.log(4<3);
console.log(4<=3);
console.log(4==4);
console.log(4===4);
console.log(4!=4);
console.log(4!==4);
console.log(4!='4');
console.log(4=='4');
console.log(4==='4');
console.log('python'.length!='jargon'.length);

//6.
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
console.log(!('dragon'.includes('on') && 'python'.includes('on')));

//7.
let date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getTime());
