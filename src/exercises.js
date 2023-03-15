const filterNumbers = (arr,largerThan) => arr.filter(number => number > largerThan);

const returnFirstTwoDrivers = ()=> {
const drivers = ["Sally", "Bob", "Freddy", "Claudia"];
return drivers.slice(0, 2);
}


const person = { 
  name: "Bob", 
  greet: function () {
    setTimeout(() => {
        console.log(`Hello, my name is ${this.name}`);
      },2000);
  },
}; 

function add(a = 1, b = 1) {
  return a + b;
}
// Esto significa que si no se pasan argumentos a la función, automáticamente utilizará 1 como valor por defecto para a y b.
// Si se pasan uno o ambos argumentos, los utilizará en su lugar. 


function createGrid(array) {
  const width = subtract(array[0], 1);
  const height = subtract(array[1], 1);
  return `Generates a ${width} x ${height} grid`;
}

function subtract(a, b = 0) {
  return a - b;
}
//The subtract() function is used to subtract 1 from each of the dimensions in the input array,
//which gives us the width and height of the grid.
//This is because grid dimensions are often described in terms of the number of cells or squares 
//in each direction, rather than the number of lines that separate the cells. 
//Ex: 3x3 grid has 3 rows and 3 columns, but only 2 lines in each direction.

function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}

//...args rest parameter collects all arguments passed to the function into an array called args.
//reduce() method is used to sum all the elements in the args array, starting with an initial value of 0.
//The arrow function syntax is used to define the callback function for the reduce() method in this version of the code.


const addNumbers = (...numbers) => {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

const calculate = (product, ...numbers) => {
  return numbers.map(number => number * product);
}
//The map() method on this array to multiply each number by the product and return a new array of the results.

const join = (array1, array2) => {
  return [...array1, ...array2];
}

//

const savedFile = {
  extension: "jpg",
  name: "repost",
  size: 14040,
};

const fileSummary = (file) => {
  return `The file ${file.name}.${file.extension} is of size ${file.size}.`;
}

//


const addressMaker = ({city,state}) => {
  const newAddress = {
    city,
    state,
    country: "United States",
  };
  return `${newAddress.city}, ${newAddress.state}, ${newAddress.country}`;
}
//
class Ninja {
  constructor (options) {
    this.name = options.name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;
  }
  sayName() {
    console.log(`My ninja name is ${this.name}`);
  }

  showStats() {
    console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
  }

  drinkSake() {
    this.health += 10;
    console.log(`Health: ${this.health}`);
  }
}
 


