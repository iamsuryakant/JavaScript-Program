'use strict';

// const bookings = [];

// const createBooking = function (flightNum,
//     numofPassengers = 1,
//     price = 199 * numofPassengers) {

//     // numofPassengers = numofPassengers || 1;
//     // price = price || 199;

//     const booking = {
//         flightNum,
//         numofPassengers,
//         price,
//     }

//     console.log(booking);
//     bookings.push(booking);
// }

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 240);

// const flight = 'LH234';

// const surya = {
//     name: 'Surya Prakash',
//     passport: 123456789,
// }

// const checkIn = function (flightNum, passenger) {
//     flightNum = 'LH999';
//     passenger.name = 'Mr. ' + passenger.name;

//     if(passenger.passport === 123456789) {
//         alert('Check In');
//     } else {
//         alert('Wrong Passport');
//     }
// }

// checkIn(flight, surya);

/*
const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
};


const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// Higher Order Function

const transformer = function (str, fn) {
    console.log(`Original String: ${str}`);
    console.log(`Transformed String: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
}

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);


// JS uses callbacks all the time
const high5 = function () { 
    console.log('👋');
}

document.body.addEventListener('click', high5);

['Surya', 'Prakash', 'Surya Prakash', 'Hello'].forEach(high5);

*/

/*
const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    }
}

const abc = greet('Hello,');
abc('Surya');
abc('Prakash');

greet('Hey')('Ravi');


// arrow functions

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hello')('Raviprakash');

*/

/*

const Airakasa = {
    airline: 'AirAkasa',
    iataCode: 'ITA',
    booking: [],

    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`);
        this.booking.push({ flight: `${this.iataCode} ${flightNum}`, name: name });
    },

};

Airakasa.book(239, 'Suryakant');
Airakasa.book(635, 'Prakash');

const book = Airakasa.book;

const swiss = {
    airline: 'Swiss',
    iataCode: 'LX',
    booking: [],
};

book.call(swiss, 583, 'Suryakant');

const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);






// Bind Method

const bookSw = book.bind(swiss);
bookSw(23, 'Surya');


// With Event Listeners

Airakasa.planes = 300;
Airakasa.buyplane = function () {
    console.log(this);
    this.planes++;
    
    console.log(this.planes);
}

document.querySelector('.buy').addEventListener('click', Airakasa.buyplane);

// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));


const addTaxRate = function (rate) {
    return function (value) {
        return value + value * rate;
    }
}

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));

*/

//////////////////////////////////////

// Coding Challenge #1

/* 
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?
BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

/*

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],

  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );

    console.log(answer);

    // Register answer
      typeof answer === 'number' && answer < this.answers.length
          && this.answers[answer]++;
      
      //console.log(this.answers);
      this.displayResults();
      this.displayResults('string');
    },
  
    displayResults(type = 'array') { 
        if (type === 'array') {
            console.log(this.answers);
        } else if (type === 'string') { 
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }
    }

 
};

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({answers: [5,2,3]}, 'string')
// [5, 2, 3]
// [1, 5, 3, 9, 6, 1]

*/


/*

//Closures


const secureBooking = function () {
    let passengerCount = 0;

    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

const booker = secureBooking();
booker();
booker();
booker();

*/

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click', function () {
        header.style.color = 'blue';
    });

})();

