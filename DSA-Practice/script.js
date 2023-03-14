'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },

  // orderDelivery: function (obj) {
    // console.log(obj);
  // },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIndegredient, ...otherIngredient) { 
    console.log(mainIndegredient);
    console.log(otherIngredient);
  },

};

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

const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4.
const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(playersFinal);

//5.
const { odds: { team1, x: draw, team2 } } = game;
console.log(team1, draw, team2);

//6.
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

// printGoals['Davies', 'Muller', 'Lewandowski', 'Kimmich'];
// printGoals['Davies', 'Muller'];
printGoals(...game.scored);

//7.
team1  < team2 ? console.log('Team 1 is more likely to win') : console.log('Team 2 is more likely to win');

