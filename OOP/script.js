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

/*

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

*/
/*

// Building Promises

const lotteryPromise = new Promise(function(resolve,
                                            reject){
  console.log("Value finding");

  setTimeout(function(){
    if(Math.random() >= 0.5){
      resolve("Got the value");
    }else{
      reject( new Error("Not the right value"));
    }
  }, 2)

});


lotteryPromise.then(res => console.log(res))
  .catch(err => console.error(err));

// Promisifying Set Timeout
const wait = function(seconds){

  return new Promise(function(resolve){
    setTimeout(resolve, seconds*1000);
  });
};

wait(2).then(() => {
  console.log("Waited for 2 seconds");
  return wait(1);
}).then(() =>{
  console.log('Waited for 1 seconds');
});

*/




/*
const getPosition = function(){
  return new Promise(function(resolve, reject){
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );

    navigator.geolocation.getCurrentPosition(resolve, reject);

  })
};

getPosition().then(pos => console.log(pos));

*/

/*

const imgContainer = docum

const createImage = function(imgPath){
  return new Promise(function(resolve, reject){
    const img = document.createElement('img');
    img.src = imgPath;


  })
}

*/

/*


const whereamI = async function (country){
  const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);

  const data = await res.json();
  console.log(data);


};

whereamI('india');
console.log('First');

*/


// async function getJSON(s) {
//
// }

const getCountries = async function(c1,c2, c3){
  try{
    const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);


    console.log([data1.capital, data2.capital, data3.capital]);
  }catch (err){
    console.error(err);
  }
}

getCountries('india', 'usa', 'canada');
