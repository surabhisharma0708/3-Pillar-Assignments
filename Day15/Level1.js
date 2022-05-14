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

}
