//create an object with class/constructor
//easiest object is object literal: var dog = { name:"fido" age:8}
//better is object constructor function Dog (age, name, color){this.age=age; this name=name; this.color=color;}

class Dog {
  constructor(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
  }
}
class Cat {
  constructor(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
  }
}

function objTest() {
  console.log("Test for creating objects");
  let meow = new Cat("mewo", 4, "blue");
  let alex = new Dog("alex", 2, "red");
  let sona = new Dog("sona", 4, "green");
  console.log(alex, sona, meow);
}
