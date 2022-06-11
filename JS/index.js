// First Javascript code!
console.log('Hello Pakistan');

const name = 'Arbaz';
//let lastName = 'Khan';
let orderList = [2, 'egg', 3];
let person = {
    age: 25,
    day: 'Monday'
};

function alerting(name){
    console.log(name);
}
alerting('John');

function addition(number){
    return number + number;
}

addition(2);
console.log(addition(5));
person['age'] = 33
console.log(person.age);
console.log(name);
//console.log(lastName);
console.log(orderList);
orderList[1] = 'table';

orderList[3] = 'chair';

//concatenate
console.log(orderList);
let age = 2;
console.log(`My name is ${name} and age is ${age}`);

//array
const fruit = ['egg', 'paper', 'mango'];

fruit[3] = 'biscuit';
fruit.push('orange');
fruit.pop();
console.log(fruit);

//object literal

/*const man = {
    firstName:'Umer',
    lastName:'Ali',
    age:'33',
    hobbies: ['music', 'dance', 'guitar'],
    address: {
        street:'road 6',
        city:'Karachi',
    }
}
//adding properties to object

man.email = 'gg@gmail.com';
man.address.area = 'Mehran town';
console.log(man);
*/

//destrucing object
//const {firstName , lastName, address:{ street }} = man;
//console.log(street);

//objects in array
 const todos = [
     {
         id: 1,
         text: 'you are allowed',
         completed: false,
     },
     {
        id: 3,
        text: 'you are materialistic',
        completed: true,
    },
    {
        id: 2,
        text: 'you are welcomed',
        completed: false,
    }
 ];
 todos[1].gender = 'male';
 console.log(todos[1]);
 //json format "" on both not ''
 
//const todo = JSON.stringify(todos);
//console.log(todo);

//for loop

for(let i = 1; i<=10; i++)[
    console.log(`hello ${i}`)
]
for(let i = 0; i < todos.length; i++)[
    console.log(todos[i].id)
]
for(let todo of todos)[
    console.log(todo.completed)
]
//while
let i = 0;
while(i<10){
    console.log(`zero ${i}`)
    i++;
}
//high order array methods
//foreach 
todos.forEach(function(todo){
    console.log(todo.text)
});
//map return a array after loop

const todoText = todos.map(function(todo){
    return todo.text;
});
console.log(todoText);

//filter return a array on a condition

const tododone = todos.filter(function(todo){
    return todo.completed === true;
});
console.log(tododone);
//filter + map

const todocompleted = todos.filter(function(todo){
    return todo.completed === false;
}).map(function(todo){
    return todo.text;
});
console.log(todocompleted);

//if || OR , && AND

const check = 5;
if(check === 10){
    console.log('it is equal to 10');
}   else if(check > 10){
    console.log('it is greater than 10');
}       else {
    console.log('less than 10')
}
//turnery operators ? than , : else

const ini = 11;
const color = ini > 10 ? 'red' : 'blue';
console.log(color);

//switch
switch(color){
    case 'blue':
        console.log('color is blue');
        break;
    case 'red':
        console.log('color is red');
        break;
    default:
        console.log('not red or blue');
}
//function

function sum(num1 = 0, num2 = 0){
    return num1 + num2;
}
console.log(sum());

//or
function sum(num1 = 0, num2 = 0){
    console.log(num1 + num2);
}
sum(2,2);

//Arrow function
const addNum = (num1, num2) => {
    return num1+num2;
}

//const addNum = (num1,num2) => num1 + num2;
console.log(addNum(3,3));

//Constructor function Should declare with capital letter
//you can create function of a constructor properties
function Fruit(colour, season, harvested){
    this.colour = colour;
    this.season = season;
    this.harvested = new Date(harvested);
    this.getHarvestedDate = function(){
        return this.harvested.getFullYear();
    }
    this.getAvaiable = function(){
        return `${this.season} ${harvested}`
    }
}
//Instantiate object
const apple = new Fruit('red', 'spring', '3-12-2022');
console.log(apple.getHarvestedDate());
console.log(apple.getAvaiable());

/*you can create method outside constructor of it by using
prototype because hum ko har object k instances k sath
zarrorot nahi ho sakti function ki tou hum usko bahar
prototype mein declare kar sakte hen */
function Man(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}
Man.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
}
Man.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}
//Instantiate object
const man1 = new Man('Uzair', 'Ali', '2-2-2022');
const man2 = new Man('Saad', 'Basit', '3-4-2011');
console.log(man2.getFullName());

//Class, just a prettier way to write,works same

class Person {
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person1 = new Person('Umer','Zaman', '2-3-1999');
console.log(person1.getBirthYear());
console.log(person1.getFullName());

const btn = document.querySelector('.btn');

btn.addEventListener('click', MyHi)

setInterval(() => {
    btn.removeEventListener('click', MyHi);
}, 3000);
function MyHi(){
    const hi = document.createTextNode('Hi');
    const p = document.createElement('p');
    p.append(hi);
    document.querySelector('.demo').appendChild(p);
    }
