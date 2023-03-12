// Handmade xD
const filterNumbers = (arr, largerThan) => {
  return arr.filter(function (number) {
    return number > largerThan;
  });
}

// Original
// function filterNumbers(arr, largerThan) {
//   return arr.filter(function (number) {
//     return number > largerThan;
//   });
// }


// Handmade
const returnFirstTwoDrivers = () => {
  const drivers = ["Sally", "Bob", "Freddy", "Claudia"];
  return drivers.slice(0, 2);
}

// Original
// function returnFirstTwoDrivers() {
//   const drivers = ["Sally", "Bob", "Freddy", "Claudia"];
//   return drivers.slice(0, 2);
// }

// Handmade
const person = {
  name: "Bob",
  greet: () => {
    setTimeout(
      function () {
        console.log("Hello, my name is " + person.name)
      }.bind(this),
      2000
    );

  },
};



// Original
// const person = {
//   name: "Bob",
//   greet: function () {
//     setTimeout(
//       function () {
//         console.log("Hello, my name is " + this.name);
//         console.log(this);
//       }.bind(this),
//       2000
//     );
//   },
// };

// Handmade
function add(a = 1, b = 1) {
  a = a || 1;
  b = b || 1;
  return a + b;
}

//Original
// function add(a, b) {
//   a = a || 1;
//   b = b || 1;
//   return a + b;
// }

//Handmade
const createGrid = (array) =>  `Generates a ${array[0]} x ${array[1]} grid`;


// Original
// function createGrid(array) {
//   return `Generates a ${array[0]} x ${array[1]} grid`;
// }

function sum() {
  const argsArray = Array.prototype.slice.call(arguments);
  return argsArray.reduce(function (a, b) {
    return a + b;
  }, 0);
}

function addNumbers(numbers) {
  return numbers.reduce(function (sum, number) {
    return sum + number;
  }, 0);
}

function calculate(product, numbers) {
  return numbers.map(function (number) {
    return number * product;
  });
}

function join(array1, array2) {
  return array1.concat(array2);
}

const savedFile = {
  extension: "jpg",
  name: "repost",
  size: 14040,
};

function fileSummary(file) {
  return (
    "The file" + file.name + "." + file.extension + "is of size" + file.size
  );
}

function addressMaker(address) {
  // Add some code here

  const newAddress = {
    city: address.city,
    state: address.state,
    country: "United States",
  };

  return `${newAddress.city}, ${newAddress.state}, ${newAddress.country}`;
}

function Ninja(options) {
  this.name = options.name;
  this.health = 100;
  this.speed = 3;
  this.strength = 3;
}

Ninja.prototype.sayName = function () {
  console.log("My ninja name is " + this.name);
};

Ninja.prototype.showStats = function () {
  console.log(
    "Name: " +
      this.name +
      ", Health: " +
      this.health +
      ", Speed: " +
      this.speed +
      ", Strength: " +
      this.strength
  );
};

Ninja.prototype.drinkSake = function () {
  this.health += 10;
  console.log("Health: " + this.health);
};
