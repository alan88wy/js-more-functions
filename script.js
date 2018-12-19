// JS: More Functions, Arrays, and Objects
// =======================================
// Exercise 1: Fizzbuzz
// ====================
// Write a function that loops through numbers from 1 to 100 and does the following:
//   If the number is divisible by 3, print Fizz.
//   If the number is divisible by 5, print Buzz.
//   If the number is divisible by both 3 and 5, print FizzBuzz.
//   If the number is divisible by neither 3 nor 5, print the number.
// Hint: The % operator gives the remainder when one number is divided by another, e.g. 10 % 7 gives 3.
// Note: This used to be a common interview question.

function fizzBuzz() {
  for (var i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// fizzBuzz()

// Exercise 2: Prime Counting
// ==========================
// Write a function that takes a number and returns true if the number is prime, and false otherwise.
// Hint: A number is prime when it is only divisble by 1 and itself.

function prime(no) {
  if (no === 1) {
    return false;
  }

  for (var i = 2; i < no; i++) {
    if (no % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(prime(17));

// Exercise 3: Letter Counting
// ===========================
// Write a function that takes a string and prints out how many times a character occurs in the string. For example, letterCount("apple") should print the following:
// a - 1
// p - 2
// l - 1
// e - 1
// Hint: Somewhere, you will need to examine each letter in the string, and increase the value of a counter depending on the letter you're currently examining. An object with keys corresponding to the letters of the string would be useful.

function countLetter(data) {
  var counter = {};

  for (var i = 0; i < data.length; i++) {
    if (counter[data[i]]) {
      counter[data[i]] += 1;
    } else {
      counter[data[i]] = 1;
    }
  }

  console.log(counter);
}

countLetter("banana");

// Exercise 4: Debugging
// =====================
// The swap function below is supposed to swap the values of two variables given to it. Run the code and explain the result. Write any necessary corrected code below.
// Note: Compare this to a previous exercise on swapping two elements of an array. If time permits, explain the difference between this swap function and the function you wrote for swapping two elements of an array which worked.

var x = 2,
  y = 10;

function swap(a, b) {
  var tmp = a;
  a = b;
  b = tmp;
  console.log("Variables swapped:", a, b);
}

swap(x, y);

console.log("The value of x is", x, "and the value of y is", y);

// Explanation:

// The above code will not work because the value of x & y is passed to
// the function and not the varible itself. a & b is local to the function swap (local scope).
// The solution is either we use x & y inside the swap function (global scope) instead of a & b, OR
// Write your corrected code below.

var x = 2,
  y = 10;

function swap(a, b) {
  var tmp = a;
  a = b;
  b = tmp;
  console.log("Variables swapped:", a, b);

  return [a, b];
}

[x, y] = swap(x, y);
console.log("The value of x is", x, "and the value of y is", y);

// Exercise 5: Array arithmetic
// ============================
// 5A. Write a function that takes 2 arrays of numbers and returns an array containing only the unique elements in both arrays. For example, union([1, 2, 3], [2, 3, 4]) should return [1, 2, 3, 4].
// Hint: The .indexOf method of an array can find you the index of a given element in an array.
// *Optional challenge: add an optional 3rd parameter, to be a boolean value, so that when it is true, the array that you return is sorted.

function getUniqueArray(arrA, arrB) {
  // Get Unique Array

  for (var i = 0; i < arrB.length; i++) {
    var c = 0;
    for (j = 0; j < arrA.length; j++) {
      if (arrB[i] === arrA[j]) {
        c = 0;
        break;
      } else {
        c++;
      }
    }

    if (c > 0) {
      arrA.push(arrB[i]);
    }
  }

  console.log(arrA);
}

getUniqueArray([1, 2, 3, 4, 5, 6], [2, 3, 4, 7, 8, 9, 10]);

function getCommonArr(arrA, arrB) {
  // Get Common Array

  var arrC = [];

  for (var i = 0; i < arrB.length; i++) {
    var found = false;

    for (j = 0; j < arrA.length; j++) {
      if (arrB[i] === arrA[j]) {
        found = true;
        break;
      }
    }

    if (found) {
      if (arrC.indexOf(arrB[i]) < 0) {
        arrC.push(arrB[i]);
      }
    }
  }

  console.log(arrC);
}

getCommonArr([1, 2, 2, 3, 4, 5, 6, 7], [2, 2, 3, 4, 7, 8, 9, 10]);

function getUniqueElement(arrA, arrB) {
  // Get Unique Element

  var arrC = [];

  for (var i = 0; i < arrA.length; i++) {
    if (arrB.indexOf(arrA[i]) < 0) {
     if (arrC.indexOf(arrA[i]) < 0) {
        arrC.push(arrA[i]);
      }
    }
  }

  for (var i = 0; i < arrB.length; i++) {
    if (arrA.indexOf(arrB[i]) < 0) {
      if (arrC.indexOf(arrB[i]) < 0) {
        arrC.push(arrB[i]);
      }
    }
  }

  console.log(arrC);
}

getUniqueElement([1, 2, 2, 3, 4, 5, 5,6, 7], [2, 2, 3, 4, 7, 8, 9, 10, 10]);

// 5B. Write a function that takes 2 arrays of numbers and returns an array containing only the unique elements common to both arrays. For example, intersection([1, 2, 3], [2, 3, 4]) should return [2,3].
// *Optional challenge: Handle the situation where the elements may not be unique, i.e. intersection([1, 2, 2, 2, 3], [2, 2, 3, 4]) should then return [2, 2, 3].

// 5C. Write a function that takes 2 arrays of numbers and returns an array containing only the unique elements that belong to exactly one array. For example, difference([1, 2, 3], [2, 3, 4]) should return [1, 4].
// *Optional challenge: Handle the situation where the elements may not be unique, i.e. difference([1, 2, 2, 3], [2, 2, 2, 3, 4]) should return [1, 2, 4].

// Bonus round!
// ============
// Extension to Exercise 2: Uncomment the code below. It generates an array of 10000 random integers. Write a function that takes the array of integers and returns an array of objects. Each object should have the following 3 keys and their corresponding values:
// 1. key: `number`, value: the integer itself
// 2. key: `ordinalForm`, value: the ordinal version of the number itself, e.g. 1st, 2nd, etc
// 3. key: `isPrime`, value: true if the number is prime, false if it isn't

// var i = 1, testArray = [];
// while (i <= 10000) {
//     testArray[i-1] = Math.ceil(Math.random() * 10000);
//     i++;
// };

// Extension to Exercise 3: Write a function that takes 2 strings and returns true if one string can be formed by rearranging the letters in the other. E.g. isAnagram("meta", "team") should return true, while isAnagram("meat", "meh") should return false.
