'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');



const displayMovements = function (movements) {

  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    
    
    const html = `
      <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};


displayMovements(account1.movements);


const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov);
  labelBalance.textContent = `${balance} EUR`;
};

calcDisplayBalance(account1.movements);

const createUsername = function (acc) {
  acc.forEach(function (accs) {

    accs.username = accs.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
    
  });
};

// stw

createUsername(accounts);







/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES





/////////////////////////////////////////////////

/*

//SLICE

let arr = ['a', 'b', 'c', 'd', 'e'];

// arr.slice(2);

console.log(arr.slice(2));

// here 2 is inclusive and 4 is exclusive

console.log(arr.slice(2, 4));

console.log(arr.slice(-2));

console.log(arr.slice(1, -2));

console.log([...arr]);


//SPLICE

console.log(arr.splice(2));
console.log(arr.splice(2, 4));
console.log(arr.splice(-2));


//reverse

arr = ['a', 'b', 'c', 'd', 'e'];

const arr2 = ['d', 'e', 'a', 'c', 'b'];
console.log(arr2.reverse());

// CONCAT Methods

const letters = arr.concat(arr)

console.log(letters);

console.log(...arr, ...arr2);

// JOIN

console.log(letters.join('-'));

*/

/*

const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));



// Getting the last elements

console.log(arr[arr.length - 1]);

console.log(arr.slice(-1)[0]);

console.log(arr.splice(-1)[0]);


*/

/*

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


for (const [i, mv] of movements.entries()) {
  if (mv > 0) {
    console.log(`Movement ${i+1}: You deposited ${mv}`);
  } else {
    console.log(`Movement ${i+1}: You withdraw ${Math.abs(mv)}`);
  }
}


console.log('-----For Each-----');

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdraw ${Math.abs(mov)}`);
  }
});


// 0: function(200)
// 1: function(450)
// 2: function(400)

*/


/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
})


// Set

const currrenciesUnq = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

console.log(currrenciesUnq);

currrenciesUnq.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
})

*/

/*
const checkDogs = function (dogsjulia, dogsKate) {
  
  const dogsjuliaCorrected = dogsjulia.slice();
  dogsjuliaCorrected.splice(0, 1);
  dogsjuliaCorrected.slice(1, 3);

  const dogs = dogsjuliaCorrected.concat(dogsKate);

  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog > 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });

}

checkDogs([3, 5, 6, 7, 12], [4, 1, 15, 3, 8]);

*/


/*

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const conversionRate = 1.1;

const movementsusd = movements.map(function (mov) {
  return mov * conversionRate;
});

console.log(movements);
console.log(movementsusd);

const movusd = [];
for (const mov of movements) {
  movusd.push(mov * conversionRate);
}

console.log(movusd);


const mvusd = movements.map(mov =>
  mov * conversionRate

);

console.log(mvusd);

*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/*


const deposits = movements.filter(function (mov) {

  return mov > 0;
})

console.log(movements);

console.log(deposits);

const withdrawals = movements.filter(mov => mov < 0);

console.log(withdrawals);

*/

const balance = movements.reduce(function (acc, curr, currInd, arr) {
  console.log(`Iteration ${currInd}: ${acc}`);
  return acc + curr;
}, 0);

console.log(balance);