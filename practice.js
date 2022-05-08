const cats =['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

function toUpper(str)
{
    return str.toUpperCase();
}
const upperCats =cats.map(toUpper);
console.log(upperCats);

function lcat(st)
{
    return st.startsWith('L');
}
const filtered = cats.filter(lcat);
console.log(filtered);

let original =[1,2,3];
let doubled = original.map(item=>tem*2);
console.log(doubled);