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

const Airakasa = {
    airline: 'AirAkasa',
    iataCode: 'ITA',
    booking: [],

    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`);
    },

};

Airakasa.book(239, 'Suryakant');
Airakasa.book(635, 'Prakash');


