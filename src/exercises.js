/*function filterNumbers(arr, largerThan) {
  return arr.filter(function (number) {
    return number > largerThan;
  });
}*/
const filterNumbers = (arr, largerThan) => arr.filter((number) => number > largerThan);


/*function returnFirstTwoDrivers() {
  const drivers = ["Sally", "Bob", "Freddy", "Claudia"];
  return drivers.slice(0, 2);
}*/
const returnFirstTwoDrivers = () => {
  const drivers = ["Sally", "Bob", "Freddy", "Claudia"];
  return drivers.slice(0, 2);
}
const person = {
  name: "Bob",
  greet: () => {
    setTimeout(
      function () {
        console.log("Hello, my name is " + this.name);
        console.log(this);
      }.bind(greet),
      2000
    );
  },
};

function add(a = 1, b = 1) {

  return a + b;
}

function createGrid(array) {
  const [width, height] = array
  return `Generates a ${array[0]} x ${array[1]} grid`;
}

function sum() {
  const argsArray = [...args];
  return argsArray.reduce(function (a, b) {
    return a + b;
  }, 0);
}

function addNumbers(...numbers) {
  return numbers.reduce(function (sum, number) {
    return sum + number;
  }, 0);
}

function calculate(product, ...numbers) {
  return numbers.map(function (number) {
    return number * product;
  });
}

function join(array1, ...array2) {
  return array1.concat(array2);
}

const savedFile = {
  extension: "jpg",
  name: "repost",
  size: 14040,
};

function fileSummary(file) {
  return (`"The file" ${file.name}"."${file.extension}"is of size"${file.size}`
  );
}

function addressMaker(address) {
  const { city, state } = address;

  const newAddress = {
    city: address.city,
    state: address.state,
    country: "United States",
  };

  return address;
}

class Ninja{
  constructor (options){
    this.name = options.name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;
  }
sayName (options){
  console.log("My ninja name is " + this.name);
}
showStats (options){
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
}
drinkSake (options){
  this.health += 10;
  console.log("Health: " + this.health);
}
}

