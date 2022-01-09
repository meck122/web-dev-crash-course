// String, Numbers, Boolean, null, undefined, Symbol

const name = 'John';
const age = 30;


// Concatenation
console.log('My name is ' + name + ' and I am ' + age);
// Template Strings
const hello = `My name is ${name} and I am ${age}`;
console.log(hello);

const s1 = 'Hello World!';
console.log(s1.length);
console.log(s1.toUpperCase());
console.log(s1.toLowerCase());
console.log(s1.substring(5,8));

const s2 = 'technology, computer, it, code';
console.log(s2.split(', '));


// Arrays - variables that hold multiple values
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

const fruits = ['apples', 'oranges', 'pears', 10, true];
fruits[5] = 'grapes';
fruits.push('mangos');
fruits.unshift('strawberries');
console.log(Array.isArray(fruits));
console.log(fruits.indexOf('oranges'));
console.log(fruits);
console.log(fruits[1]);


// Object Literals
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

const{ firstName, lastName, address: { city }} = person;
console.log(firstName);
console.log(city);

person.email = 'john@gmail.com';
console.log(person);

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting',
        isCompleted: false
    },
    {
        id: 3,
        text: 'Groceries',
        isCompleted: true
    }
];

console.log(todos);
console.log(todos[1].text);

// Convert to JSON
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);


// for
for(let i = 0; i <= 10; i++) {
    console.log(`For Loop Number: ${i}`);
}

// while
let i = 0;
while(i < 10){
    console.log(`For Loop Number: ${i}`);
    i++;
}

for(let i = 0; i < todos.length; i++) {
    console.log(`next: ${todos[i].text}`);
}

for(let todo of todos){
    console.log(todo.text);
}


// high order array methods
// forEach, map, filter
todos.forEach(function(todo){
    console.log(todo.text);
});

const todoText = todos.map(function(todo){
    return todo.text;
});
console.log(todoText);

const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
});
console.log(todoCompleted);


// If Statements
const x = 10;

if(x === 10) {
    console.log('x is 10');
}

const color = x > 10 ? 'red' : 'blue';
console.log(color);

switch(color){
    case 'red': 
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
        break;
}


//Functions

function addNums(num1 = 1, num2 = 1) {
    console.log(num1 + num2);
    return num1 + num2;
}
addNums();
console.log(addNums(5,4));

const subNums = (num1 = 3, num2 = 2) => num1-num2;
console.log(subNums());


//Arrow stuff with high order arr methods
todos.forEach((todo) => console.log(todo));




//Object oriented programming
//Constructor Function
// function Person(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//     this.getBirthYear = function(){
//         return this.dob.getFullYear();
//     }
//     this.getFullName = function(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// Person.prototype.getBirthYear = function(){
//     return this.dob.getFullYear();
// }


// Class
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }
    
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

// Instantiate Object
const person1 = new Person('Mark', 'Liao', '6-27-2001');
const person2 = new Person('Jane', 'Doe', '3-3-2002');
console.log(person1);
console.log(person2);
console.log(person2.dob.getFullYear());
console.log(person1.getBirthYear());
console.log(person1.getFullName());
console.log(person1);


