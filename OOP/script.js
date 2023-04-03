'use strict';


/*

const Person = function(firstName, birthYear){
  this.firstName = firstName;
  this.birthYear = birthYear;

  // this.calcAge = function(){
  //   console.log(2037- this.birthYear);
  // }

}

const res = new Person('Surya', 2000);
console.log(res);

const matida = new Person('Matida', 2001);
console.log(matida);

Person.prototype.calAge = function(){
  console.log(2037 - this.birthYear);
}

res.calAge();
matida.calAge();

*/

/*
const Car = function(make, speed){
  this.make = make;
  this.speed = speed;

  console.log(`${make} is running at speed of ${speed} KM/h`);
}

Car.prototype.accelerate = function(){
  //return this.speed + 10;
  this.speed += 10;

  console.log(`${this.make} is running at speed of ${this.speed} KM/h`);
}

Car.prototype.brake = function(){
  this.speed -= 5;

  console.log(`${this.make} is running at speed of ${this.speed} KM/h`);
}

const Car1 = new Car('BMW', 120);
const Car2 = new Car('Mercedes', 100);

Car1.accelerate();
Car2.accelerate();
Car2.brake();
Car1.accelerate();

*/

// Car2.brake();

// const Car2  = new Car.prototype.brake();

// console.log(Car1);

// class Personcl = class {}

/*
class P1 {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;

  }

  calcAge(){
    console.log(2037 - this.birthYear);
  }

  get age(){
    return 2037 - this.birthYear;
  }


}

const jessica = new P1('Jessica', 1996);

console.log(jessica);
jessica.calcAge();

console.log(jessica.age);

P1.prototype.greet = function(){
  console.log(`Hey ${this.firstName}`);
}

jessica.greet();

*/


const getCountryData = function(country){
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function(response){
      //console.log(response);
      return response.json();

    }).then(function(data){
    console.log(data);
  })
}

getCountryData('india');