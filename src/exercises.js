/*function filterNumbers(arr, largerThan) {
  return arr.filter(function (number) {
    return number > largerThan;
  });
}*/

//Primero: resuerto
const filterNumbers = (arr , largerThan) => arr.filter = number => number > largerThan;


/*function returnFirstTwoDrivers() {
  const drivers = ["Sally", "Bob", "Freddy", "Claudia"];
  return drivers.slice(0, 2);
}*/
//Segundo: resuelto completado

 const drivers = ["Sally", "Bob", "Freddy", "Claudia"];
const returnFirstTwoDrivers = () => drivers.slice(0,2); 


/*const person = {
  name: "Bob",
  greet: function () {
    setTimeout(
      function ()  {
        console.log("Hello, my name is " + this.name);
        console.log(this);
      }.bind(this),
      2000
    );
  },
};*/
//Tercero; resuelto 
const person = {
  name: "Bob",
  greet: function () {
    console.log("Hello, my name is " + this.name);
    setTimeout(() =>{
        console.log(this);
    },2000);
  },
};
/*function add(a, b) {
  a = a || 1;
  b = b || 1;
  return a + b;
}*/
//cuarto: resuelto
const add = (a = 1, b = 1) => a + b;


/*function createGrid(array) {
  return `Generates a ${array[0]} x ${array[1]} grid`;
}*/
//Quinto: resuelto
/*function createGrid(array = 0, array = 1) {
  return `Generates a ${array[0]} x ${array[1]} grid`;
}*/


/*function sum() {
  const argsArray = Array.prototype.slice.call(arguments);
  return argsArray.reduce(function (a, b) {
    return a + b;
  }, 0);
}*/
//Sexto resuelto
function sum(...argsArray) {
  return argsArray.reduce(function (a, b) {
    return a + b;
  }, 0);
}


/*function addNumbers(numbers) {
  return numbers.reduce(function (sum, number) {
    return sum + number;
  }, 0);
}*/
//Septimo: resuelto
function addNumbers(...numbers) {
  return numbers.reduce(function (sum, number) {
    return sum + number;
  }, 0);
}
//Octavo: resuelto
function calculate(product, ...numbers) {
  return numbers.map(function (number) {
    return number * product;
  });
}
//Noveno: resuelto
function join(array1, array2) {
  return array1.concat(...array2);
}

/*const savedFile = {
  extension: "jpg",
  name: "repost",
  size: 14040,
};*/
//Decimo: resuelto

 const savedFile = {
  extension: "jpg",
  name: "repost",
  size: 14040,
};

function fileSummary(file) {
  return (
    `The file ${file.name}. ${file.extension}is of size ${file.size}`
  );
  }


/*function fileSummary(file) {
  return (
    "The file" + file.name + "." + file.extension + "is of size" + file.size
  );
}*/

/*function addressMaker(address) {
  // Add some code here


  const newAddress = {
    city: address.city,
    state: address.state,
    country: "United States",
  };

  return `${newAddress.city}, ${newAddress.state}, ${newAddress.country}`;
}*/
//Undecimo: falta


function addressMaker(address) {
  // Add some code here

  const {city, state} = [address.city,address.state];

  const newAddress = {
    city: city,
    state: state,
    country:"United States",
  };
  return `${newAddress.city}, ${newAddress.state}, ${newAddress.country}`;
}


/*function Ninja(options) {
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
};*/
//Duodecimo: resuelto
class Ninja {
  constructor(options) { 
  this.name = options.name;
  this.health = 100;
  this.speed = 3;
  this.strength = 3;
  }
  sayName() {
    console.log(`My ninja name is ${this.name}`);
     
  }
  showStats() {
    console.log(
      `Name:${this.name}
     Health:${this.health}
      Speed: ${this.speed}
       Strength: ${this.strength}`
    )
  }
  
  drinkSake() {
    this.health += 10;
    console.log(`Health:  ${this.health}`);
  }
};



