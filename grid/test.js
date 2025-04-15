// Practice

// for of loop
/*
for(element of elements){
// do something with element
}
*/

let fruits = ["apple", "banana", "orange", "litchi", "mango"];
for (let fruit of fruits) {
  console.log(fruit); // Output: apple, banana, orange
}

/*
for (const char of "apnacollege") {
  console.log(char); // Output: a, p, n, a, c, o, l, l, e, g, e
}
*/

let resulting_String = "";
for (const char of "apnacollege") {
  resulting_String += char;
}
console.log(resulting_String);

// Nested for of loop

let heroes = [
  ["ironman", "spiderman", "thor"],
  ["batman", "superman", "wonderwoman"],
];
for (const hero of heroes) {
  for (const name of hero) {
    console.log(name); // Output: ironman, spiderman, thor, batman, superman, wonderwoman
  }
}

// Reduce

// Finding Maximum in an array

const numbers_Of_1DimentionalArray = [2, 3, 4, 5, 3, 4, 7, 8, 1, 2];

let maximum = -1;

for (let i = 0; i < numbers_Of_1DimentionalArray.length; i++) {
  if (numbers_Of_1DimentionalArray[i] > maximum) {
    maximum = numbers_Of_1DimentionalArray[i];
  }
}

console.log("maximum number_Of_1DimentionalArray: ", maximum); // Output: 8

// Using reduce method to find the maximum number in an array
const maxNumber_Of_1DimentionalArray = numbers_Of_1DimentionalArray.reduce(
  (accumulator, currentValue) => {
    // return Math.max(accumulator, currentValue);
    // return accumulator > currentValue ? accumulator : currentValue;
    if (accumulator > currentValue) {
      // currentValue < accumulator
      return accumulator;
    } else {
      return currentValue;
    }
  }
);

console.log(maxNumber_Of_1DimentionalArray);

// Check if all numbers in our array are multiple of 10 or not.

const updated_Numbers_Of_1DimentionalArray = numbers_Of_1DimentionalArray.map(
  (number) => {
    return number * 10;
  }
);

// console.log(updated_Numbers_Of_1DimentionalArray);

let ans = updated_Numbers_Of_1DimentionalArray.every((number) => {
  return number % 10 === 0;
});

console.log(ans); // Output: true if all are multiples of 10, false if not.

// create a function to find the min number in an array using reduce method

const findMinNumber = (numbers) => {// Outer function

  const MinNumbers = (numbers) => {// Inner function
    return numbers.reduce((accumulator, currentValue) => {
      // return Math.min(accumulator, currentValue);
      // return accumulator < currentValue ? accumulator : currentValue;
      if (currentValue < accumulator) {
        return currentValue;
      } else {
        return accumulator;
      }
    });
  };

  return MinNumbers(numbers);// The last return is giving the final result back to the main caller of the function findMinNumber.
};

console.log("updated_Numbers_Of_1DimentionalArray: ", findMinNumber(updated_Numbers_Of_1DimentionalArray));

// console.log(findMinNumber(updated_Numbers_Of_1DimentionalArray)); // Output: 10
