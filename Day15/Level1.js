class Animal
{
    constructor(name,age,color,legs)
    {
        this.name=name;
        this.age=age;
        this.color=color;
        this.legs=legs;
    }
    getinfo()
    {
        let info = `My name is ${this.name}.I am ${this.age} years old.I am of ${this.color} color.I have ${4} legs`;
        return info;
    }

}
const ani = new Animal('Pluto',25,"brown",4);
console.log(ani.getinfo());

class CAT extends Animal
{

}
class DOG extends Animal
{
    constructor(name,age,color,legs,gender)
    {
        super(name,age,color,legs)
        this.gender=gender;
    }
    getinfo()
    {
        let info = `My name is ${this.name}.I am ${this.age} years old.I am of ${this.color} color.I have ${this.legs} legs`;
        return info;
    }
}
const dog= new DOG('Anmol',18,'black',4,'female');
console.log(dog.getinfo());
