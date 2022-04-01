// var name = "albert";

// function loadData() {
//   console.log("getting data from the server");
// }

// function sayHello(name, last) {
//   console.log("hello" + name + " " + last);
// }

// function sayHello10Times() {
//   for (let i = 0; i < 10; i++) {
//     console.log(i);
//   }
// }
// function printSomeNumbers() {
//   for (let i = 0; i < 21; i++) {
//     if (i != 7 && i != 13) {
//       console.log(i);
//     }
//   }
// }

// // need a for loop first to travel the array fist to get total values, how to get numbers from the array, you can use the index to get values from array,
// function sumAll(list) {
//   console.log("---SUM ALL----");
//   let total = 0;
//   for (let i = 0; i < list.length; i++) {
//     let num = list[i];
//     total = total + num;
//   }
//   console.log("result", total);
// }

// function findOldest(list) {
//   let solution = list[0]; //starting a comparison point
//   for (i = 0; i < list.length; i++) {
//     //traveling the array
//     let num = list[i]; //getting value from array and putting in variable
//     if (num > solution) {
//       // if any num is less than the starting point for solution, update that solution
//       solution = num;
//     }
//   }
//   console.log("Oldest", solution);
// }

// //need a variable to get the count
// function countLowerThan(pivot, list) {
//   let count = 0;
//   for (let i = 0; i < list.length; i++) {
//     let num = list[i];
//     if (num < pivot) {
//       count += 1;
//     }
//   }
//   console.log("there are", count, "ages lower than", pivot);
// }
// function init() {
//   console.log("Page Loaded");

//   loadData();

//   var person = "John";
//   var last = "Smith";
//   sayHello(person, last);
//   sayHello("Maria");

//   //exercise:
//   sayHello10Times();
//   printSomeNumbers();

//   let ages = [
//     12, 43, 45, 34, 34, 34, 23, 23, 56, 67, 78, 89, 89, 33, 22, 33, 44,
//   ];
//   sumAll(ages);

//   findOldest(ages); //print the oldest person in the list

//   countLowerThan(25, ages); //print how many ages are less than 25
// }
// window.onload = init;
