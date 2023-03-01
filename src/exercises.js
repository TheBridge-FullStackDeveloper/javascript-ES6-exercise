const filterNumbers = (array, largerThan) => {
  return array.filter((number) => number > largerThan);
};

const returnFirstTwoDrivers = (array) => {
  return array.slice(0, 2);
};

const person = {
  name: "Bob",
  greet: function () {
    setTimeout(() => {
      console.log("Hello, my name is " + this.name);
      console.log("👆En el console log tiene que decir: Hello, my name is Bob");
      console.log(this);
    }, 2000);
  },
};

function add(a = 1, b = 1) {
  a = a;
  b = b;
  return a + b;
}

function createGrid([width, height]) {
  return `Generates a ${width} x ${height} grid`;
}

function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}

function addNumbers(...numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
}

function calculate(product, ...numbers) {
  return numbers.map((number) => number * product);
}

function join(array1, array2) {
  return [...array1, ...array2];
}

const savedFile = {
  extension: "jpg",
  name: "repost",
  size: 14040,
};

function fileSummary({ name, extension, size }) {
  return `The file ${name}.${extension} is of size ${size}`;
}

function addressMaker(address) {
  const { city, state, country } = address;

  const newAddress = {
    city,
    state,
    country,
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
