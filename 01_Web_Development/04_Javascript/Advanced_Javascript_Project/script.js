// // Ternary operator
// function isUserValid(bool){
//   return bool;
// }
//
// var answer = isUserValid(true) ? "You may enter" : "Access Denied!";
//
// var automatedAnswer = "Your account # is " + (isUserValid(true) ? "1234" : "Access Denied!");
//================================================================
// // Switch
// function moveCommand(direction){
//   var whatHappens;
//   switch(direction){
//     case "forward":
//           whatHappens = "You encountered a monster";
//           break;
//     case "back":
//           whatHappens = "You arrived home";
//           break;
//     case "left":
//           whatHappens = "You found a river";
//           break;
//     case "right":
//           whatHappens = "You run into a troll";
//           break;
//     default:
//           whatHappens = "Please enter a valid direction";
//           break;
//   }
//   return whatHappens;
// }
//================================================================
// // Let + Const
// // Const cannot be updated
// const player = 'Bobby';
// let experience = 100;
// let wizardLevel = false;
//
// if (experience > 90){
//   // Creates new instance of wizardLevel without having a new function
//   let wizardLevel = true;
// }
//
// const obj = {
//   player: 'Bobby',
//   experience: 100,
//   wizardLevel: false;
// }
//================================================================
// Destructuring
// const obj = {
//   player: 'Bobby',
//   experience: 100,
//   wizardLevel: false;
// }
//
// // const player = obj.player;
// const {player, experience} = obj;
// // let wizardLevel = obj.wizardLevel;
// let {wizardLevel} = obj;
//================================================================
// // Object properties
// const a = "Simon";
// const b = true;
// const c = {};
// const obj = {
//   a,
//   b,
//   c
// }
//================================================================
// // Template string
// const name = "Sally";
// const age = 34;
// const pet = "horse";
// const greeting = "Hello" + name + " you seem to be doing " + greeting "!";
//
// const greetingBest = `Hello ${name} you seem to be ${age - 10}. What a wonderful ${pet} you have!`;
//================================================================
// //default arguments
//
// function greet(name='',age=30,pet='cat'){
//   return `Hello ${name} you seem to be ${age - 10}. What a wonderful ${pet} you have!`;
// }
//================================================================
// // Symbol
// let sym1 = Symbol();
// let sym2 = Symbol('foo');
// let sym3 = Symbol('foo');
//================================================================
// // Arrow function
// function add(a,b){
//   return a + b;
// }
//
// const add = (a,b) => a + b;
//================================================================
// // Closures
// const first = () => {
//   const greet = "Hi";
//   const second = () => {
//     alert(greet);
//   }
//   return second
// };
//
// const newFunc = first();
// newFunc();
//================================================================
// // Currying
// const multiply = (a,b) => a * b;
// const curriedMultiply = (a) => (b) => a * b;
// curriedMultiply(3)(4);
// const multiplyBy5 = curriedMultiply(5);
// multiplyBy5(5); // result: 25;
//================================================================
// // Compose
// const compose = (f,g) => (a) => f(g(a));
//
// const sum = (num) => num + 1;
//
// compose (sum, sum)(5);
//================================================================
// // Advanced Arrays
// const array = [1,2,10,16];
//
// const double = [];
// const newArray = array.forEach(num) => {
//   double.push(num * 2);
// };
//
// console.log("forEach", double);
// // Map
// const mapArray = array.map((num) => num * 2);
//
// console.log("map", mapArray);
// // Filter
// const filterArray = array.filter((num) => num > 5);
//
// console.log("filter", filterArray);
//
// // Reduce
// const reduceArray = array.reduce((accumulator, num) => {
//   return accumulator + num;
// }, 0);
//
// console.log("reduce", reduceArray);
//================================================================
// // Advanced Objects
// // Reference Type
// var object1 = { value: 10};
// var object2 = object1;
// var object3 = {value: 10);
//
// object1 === object2; //true
// object1 === object3; //false
// object1.value = 15; //set object1 to 15
// object2.value; //object2 is now 15
// object3.value; //object3 is still 10
// // Context vs scope
// const object4 = {
//   a: function(){
//     console.log(this);
//   }
// }
// // Instantiation
// class Player {
//   constructor(name, type){
//     this.name = name;
//     this.type = type;
//   }
//   introduce(){
//     console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
//   }
// };
//
// class Wizard extends Player {
//   constructor(name, type){
//     super(name, type);
//   }
//
//   play(){
//     console.log(`WEEEEE I'm a ${this.type}`);
//   }
// };
//
// const wizard1 = new Wizard('Shelly', 'Healer');
// const wizard2 = new Wizard('Shaun', 'Dark Magic');
//================================================================
//.include
//.padStart
//.padEnd
//.trimStart
//.trimEnd
//.flat() -> removes nested arrays based on tier and creates a new array with all elements
//================================================================
// const basket =['apple', 'oranges', 'grapes'];
// const basketDetailed =[ apples: 5,
//                         oranges: 10,
//                         grapes: 1000];
//
// for (let i = 0; i<basket.length; i++){
//   console.log(basket[i]);
// }
//
// basket.forEach(item => {
//   console.log(item);
// });
//
// for (item of basket){
//   console.log(item);
// }
//
// for (item in basketDetailed){
//   console.log(item);
// }
