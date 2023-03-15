'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    [weekdays[3]]: {
      open: 12,
      close: 22,
    },
    [weekdays[4]]: {
      open: 11,
      close: 23,
    },
    [weekdays[5]]: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order (startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },

  // orderDelivery: function (obj) {
    // console.log(obj);
  // },

  orderPasta (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza (mainIndegredient, ...otherIngredient) { 
    console.log(mainIndegredient);
    console.log(otherIngredient);
  },

};





// // Property NAMES

// const properties = Object.keys(restaurant.openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of properties) { 
//   openStr += `${day}, `;
// }

// console.log(openStr);


// //Property VALUES

// const values = Object.values(restaurant.openingHours);
// console.log(values);

// // Entry Object
// const entries = Object.entries(restaurant.openingHours);
// console.log(entries);

// for (const [key, {open, close}] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// With Optional Chaining (?.)
// console.log(restaurant.openingHours.fri?.open);



// Destructuring objects

// SPRED, BECAUSE ON RIGHT SIDE OF =

// const spred = [1, 2, ...[3, 4]];

// // REST, BECAUSE ON LEFT SIDE OF =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, ,risotto, ...otherfood] = [...restaurant.mainMenu,
//   ...restaurant.starterMenu
// ];

// console.log(pizza, risotto, otherfood);

// // Objects

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // Functions

// const add = function (...numbers) {
//   //console.log(numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++)
//     sum += numbers[i];
//   console.log(sum);
// }


// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 6];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

// restaurant.orderPizza('mushrooms');

// const { name, openingHours, categories } = restaurant;
//console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// // Default values

// const { menu = [], starterMenu: staters = [] } = restaurant;

// console.log(menu, staters);

// // Mutating variables

// let a = 111;
// let b = 999;
// // console.log(a, b);
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// // Nested objects

// const {
//    fri: { open: o, close: c },
// } = openingHours;

// console.log(o, c);



// Spred operator: (...);

// // Joining arrays

// const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu1);

// // Iterables: arrays, strings, maps, sets. NOT objects

// const str = 'Surya';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);


// const ingredients = [prompt('Let\'s make pasta! Ingredients 1?'),
//   prompt('Ingredients 2?'), prompt('Ingredients 3?')];

// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// let [main, ,secondary] = restaurant.categories;
// console.log(main, secondary);


// // Switching variables
// // let temp = main;
// // main = secondary;
// // secondary = temp;



// // console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const nested = [2, 4, [5, 6]];

// // const [i, , j] = nested;
// // console.log(i, j);

// const [i, ,[j,k]] = nested;
// console.log(i, j, k);


const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 11.33,
    x: 3.25,
    team2: 6.5,
  },
};

// const [players1, players2] = game.players;
// console.log(players1, players2);

// // 2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// //3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// //4.
// const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(playersFinal);

// //5.
// const { odds: { team1, x: draw, team2 } } = game;
// console.log(team1, draw, team2);

// //6.
// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
// };

// // printGoals['Davies', 'Muller', 'Lewandowski', 'Kimmich'];
// // printGoals['Davies', 'Muller'];
// printGoals(...game.scored);

// //7.
// team1  < team2 ? console.log('Team 1 is more likely to win') : console.log('Team 2 is more likely to win');


// Coding challenge #2

// const entries = Object.entries(game.scored);

// for (const [i, player] of game.scored.entries()) {
//   //const num = Number(i) + 1;
//   console.log(`Goal ${i+1}: ${player}`);
// }

// const odds = Object.values(game.odds);
// let average = 0;

// for (const odd of odds) {
//   average += odd;
// }

// console.log(average / odds.length);

// for (const [team, odds] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr}  ${odds}`);
// }

// const orderSet = new Set (['Pasta', 'Pizza', 'Pizza',
//   'Risoto', 'Pasta', 'Pizza', 'Pizza']);

// console.log(orderSet);
  
// for (const order of orderSet) { 
//   console.log(order);
// }

// const staff = ['Waiter', 'Chef', 'Waiter',
//   'Manager', 'Chef', 'Waiter'];

// const staffSet = [...new Set(staff)];
// console.log(staffSet);
  
// console.log(staffSet.length);

// const res = new Map();
// res.set('name', 'Italinao');
// res.set(1, 'Frienze Italy');

// console.log(res.set(2, 'Lisbn, Portgual'));

// const question = new Map([
//   ['question', 'What is the best programming lanugage in the world?'],
//   [1, 'C'],
//   [2, 'C++'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'correct'],
//   [false, 'Try again'],
// ]);

// console.log(question);

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, 'Substitution'],
  [47, '⚽ GOAL'],
  [61, 'Substitution'],
  [64, 'Yellow card'],
  [69, 'Red card'],
  [70, 'Substitution'],
  [72, 'Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, 'Yellow card'],
]);


// console.log(gameEvents.values());
// const events = new Set(gameEvents.values());
// console.log(events);

// const time = [...gameEvents.keys()].pop();

// console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`);


// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${min}: ${event}`);
// }

// Strings

const airline = 'Spice Jet';
const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('e'));

// console.log(airline.lastIndexOf('e'));

// console.log(airline.slice(4));

// console.log(airline.slice(4, 9));

// console.log(airline.slice(0, airline.indexOf(' ')));

// console.log(airline.slice(airline.lastIndexOf(' ')));

// console.log(airline.slice(-2));


const announcement = 'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replaceAll('door', 'gate'));

