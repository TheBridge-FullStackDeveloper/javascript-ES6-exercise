/* function filterNumbers(arr, largerThan) {
  return arr.filter(function (number) {
    return number > largerThan;
  });
} */

const filterNumbers = (arr, largerThan) => arr.filter(n => n > largerThan);


/* function returnFirstTwoDrivers() {
  const drivers = ["Sally", "Bob", "Freddy", "Claudia"];
  return drivers.slice(0, 2);
} */

const returnFirstTwoDrivers = () => {
  const drivers = ["Sally", "Bob", "Freddy", "Claudia"];
  return drivers.slice(0,2);
} 
  

/* const person = {
  name: "Bob",
  greet: function () {
    setTimeout(
      function () {
        console.log("Hello, my name is " + this.name);
        console.log(this);
      }.bind(this),
      2000
    );
  },
}; */

const person = {
  name: "Bob",
  greet: function() {
    setTimeout( () => console.log(`Hello, my name is ${this.name}`),2000)
  }
}

//person.greet();


/* function add(a, b) {
  a = a || 1;
  b = b || 1;
  return a + b;
} */

function add(a = 1, b = 1){
  return a + b;
}


/* function createGrid(array) {
  return `Generates a ${array[0]} x ${array[1]} grid`;
}
*/

function createGrid([width, height]) {
  return `Generates a ${width} x ${height} grid`;
}



/* function sum() {
  const argsArray = Array.prototype.slice.call(arguments);
  return argsArray.reduce(function (a, b) {
    return a + b;
  }, 0);
} */

function sum() {
  const argsArray = Array.prototype.slice.call(arguments);
  return argsArray.reduce(function (a, ...args) {
    return a + args;
  }, 0);
}



/* function addNumbers(numbers) {
  return numbers.reduce(function (sum, number) {
    return sum + number;
  }, 0);
} */

function addNumbers(...numbers) {
  return numbers.reduce(function (sum, number) {
    return sum + number;
  }, 0);
}


/* function calculate(product, numbers) {
  return numbers.map(function (number) {
    return number * product;
  });
} */

function calculate(product, ...numbers) {
  return numbers.map(function (number) {
    return number * product;
  });
}


/* function join(array1, array2) {
  return array1.concat(array2);
} */

function join(array1, ...array2) {
  return array1.concat(array2);
} 


const savedFile = {
  extension: "jpg",
  name: "repost",
  size: 14040,
};

/* function fileSummary(file) {
  return (
    "The file" + file.name + "." + file.extension + "is of size" + file.size
  );
} */

function fileSummary(file) {
  return (
    `The file ${file.name}.${file.extension} is of size ${file.size}`
  );
}



function addressMaker(address) {
  // Add some code here

  const { city , state } = address;

  const newAddress = {
    city: address.city,
    state: address.state,
    country: "United States",
  };

  return `${city}, ${state}, ${newAddress.country}`;
}

/* function Ninja(options) {
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
}; */

class Ninja {
  name = "";
  health = 100;
  speed = 3;
  strength = 3;

  constructor(name){
    this.name = name;
  }

  sayName = () => console.log(`My ninja name is ${this.name}`);
  showStats = () => console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
  drinkSake = function () {
    this.health += 10;
    console.log(`Health: ${this.health}`)
  }
}
