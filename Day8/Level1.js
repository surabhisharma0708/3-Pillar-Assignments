//1
const dog = {};
//2
console.log(dog);
//3
dog.name = "robo";
dog.legs = 4;
dog.color = "brown";
dog.age = 24;
dog.bark = function(){
    return "woof woof";
};

//4
console.log(Object.values(dog));

//5
dog.breed = "German-sheffard"
dog.getDogInfo =function(){
    let name = this.name;
    let legs =this.legs;
    let color = this.color;
    let age = this.age;
    let bark =this.bark;
};
console.log(Object.values(dog));