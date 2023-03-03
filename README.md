# ES6 exercises

In this exercise, you will refactor some ES5 code into ES6.

## Exercise 1: Arrow functions

### Instructions

1. Refactor the function `filterNumbers()` to use arrow function syntax.

```js
function filterNumbers(arr, largerThan) {
  return arr.filter(function (number) {
    return number > largerThan;
  });
}
```

2. Refactor the function `returnFirstTwoDrivers()` to use arrow function syntax.

```js
function returnFirstTwoDrivers() {
  const drivers = ["Sally", "Bob", "Freddy", "Claudia"];
  return drivers.slice(0, 2);
}
```

## Exercise 2: Default parameters

### Instructions

1. Refactor the function `add()` to use the default parameter syntax.

```js
function add(a, b) {
  a = a || 1;
  b = b || 1;
  return a + b;
}
```

2. Refactor the function `createGrid()` to use the destructuring.

```js
function createGrid(array) {
  const width = array[0];
  const height = array[1];
  return `Generates a ${width} x ${height} grid`;
}
```

## Exercise 3: Rest and spread

In this exercise, you will refactor some ES5 code into ES6.

### Instructions

1. Refactor the function `sum()` to use the rest operator.

```js
function sum() {
  const argsArray = Array.prototype.slice.call(arguments);
  return argsArray.reduce(function (a, b) {
    return a + b;
  }, 0);
}
```

2. Refactor the function `addNumbers()` to use the rest operator.

```js
function addNumbers(numbers) {
  return numbers.reduce(function (sum, number) {
    return sum + number;
  }, 0);
}
```

3. Refactor the function `calculate()` to use the rest operator.

```js
function calculate(product, ...numbers) {
  return numbers.map(function (number) {
    return number * product;
  });
}
```

3. Refactor the function `join()` to use the spread operator.

```js
function join(array1, array2) {
  return array1.concat(array2);
}
```

## Exercise 4: Destructuring

### Instructions

1. Refactor the following code to use string template literals.

```js
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
```

2. Refactor the following code to use object destructuring assignment.

```js
function addressMaker(address) {
  const newAddress = {
    city: address.city,
    state: address.state,
    country: "United States",
  };
}
```

## Exercise 5: Classes

In this exercise, you will refactor some ES5 code into ES6.

### Instructions

1. Refactor the following code to use ES6 class syntax.

```js
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
```
