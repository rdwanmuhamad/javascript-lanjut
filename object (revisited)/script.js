// cara untuk membuat object pada javascript

// object literal
// problem : efektif untuk object yang banyak
// let hero1 = {
//   name: "Muhamad Ridwan",
//   health: 10,
//   energy: function (eat) {
//     this.health = this.health + eat;
//     console.log(`Congratulations ${this.name}, energy increases!`);
//   },
// };

// let hero2 = {
//   name: "Ridwan Muhamad",
//   health: 30,
//   energy: function (eat) {
//     this.health = this.health + eat;
//     console.log(`Congratulations ${this.name}, energy increases!`);
//   },
// };

// function declaration
// const methodHero = {
//   energy: function (eat) {
//     this.health += eat;
//     console.log(`Congratulations ${this.name}, your energy increases!`);
//   },

//   activity: function (jump) {
//     this.health -= jump;
//     console.log(`Sorry ${this.name}, sorry your energy is low!`);
//   },

//   sleep: function (time) {
//     this.health += time * 2;
//     console.log(`Congratulations ${this.name}, your energy increases!`);
//   },
// };

// function Hero(name, health) {
//   let hero = Object.create(methodHero);
//   hero.name = name;
//   hero.health = health;
// //   hero.energy = methodHero.energy;
// //   hero.activity = methodHero.activity;
// //   hero.sleep = methodHero.sleep;
//   return hero;
// }

// let ridwan = Hero("Ridwan", 10);
// let muhamad = Hero("Muhamad", 10);

// constructor function
// function Hero(name, health) {
//   this.name = name;
//   this.health = health;

//   this.energy = function (eat) {
//     this.health += eat;
//     console.log(`Congratulations ${this.name}, your energy increases!`);
//   };

//   this.activity = function (jump) {
//     this.health -= jump;
//     console.log(`Sorry ${this.name}, sorry your energy is low!`);
//   };
// }

// let ridwan = new Hero("Ridwan", 10);
// let muhamad = new Hero("Muhamad", 10);

// prototype
function Hero(name, health) {
  this.name = name;
  this.health = health;
}

Hero.prototype.energy = function (eat) {
  this.health += eat;
  return `Congratulations ${this.name}, your energy increases!`;
};

Hero.prototype.activity = function (jump) {
  this.health -= jump;
  return `Sorry ${this.name}, sorry your energy is low!`;
};

Hero.prototype.sleep = function (time) {
  this.health += time * 2;
  return `Congratulations ${this.name}, your energy increases!`;
};

let ridwan = new Hero("Ridwan", 10);

// versi menggunakan class
// class Hero {
//   constructor(name, health) {
//     this.name = name;
//     this.health = health;
//   }
//   energy(eat) {
//     this.health += eat;
//     return `Congratulations ${this.name}, your energy increases!`;
//   }

//   activity(jump) {
//     this.health -= jump;
//     return `Sorry ${this.name}, sorry your energy is low!`;
//   }

//   sleep(time) {
//     this.health += time * 2;
//     return `Congratulations ${this.name}, your energy increases!`;
//   }
// }

// let ridwan = new Hero("Ridwan", 10);
