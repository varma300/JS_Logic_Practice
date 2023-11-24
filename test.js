/*
In JavaScript, an object is a collection of key-value pairs. 
The keys are called properties, and the values are called values. 
Objects are used to store data and to organize code. They are essential for
 creating complex and reusable components in JavaScript applications. */

// Object literals

let person = {
    name : 'rahul',
    age : 35,
    place : 'Chennai',
    about : function (){
        console.log('my name is ' + this.name  + ' and I am ' + this.age + 'years old.');
    }
}

console.log(person);


// function Constructor

// function Person(name, age, place){
//     this.name = name;
//     this.age = age;
//     this.place = place;
// }


// let obj = new Person('Rahul',35,'Chennai');

// console.log(obj.place);


// person.qlf = 'BCOM'

// console.log(person);

// delete person.age;

// console.log(person);


// method

person.about()



console.log(this === window);
