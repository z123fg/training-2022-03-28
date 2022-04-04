// #1: Write a JavaScript function that reverse a number.

let x = 32243;

const numReverse = (num) => {
  let newNum = Number([...x.toString()].reverse().join(""));

  console.log(newNum);
};

numReverse(x);

/*
 
   2. Write a JavaScript function that checks 
    whether a passed string is palindrome or not? 
    
*/

let string = "thequickbrownfoxjumpsoverthelazydog";

const isPalindrome = (string) => {
  let reverseStg = string.toLowerCase().split("").reverse().join("");

  if (reverseStg === string.toLowerCase()) {
    return true;
  }

  return false;
};

console.log(isPalindrome(string));

/*
  3.Write a JavaScript function that generates all 
    combinations of a string. 
*/

const allCombinations = (string) => {
  string = string.replace(/ /g, "");

  let newStrg = [];

  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j <= string.length; j++) {
      newStrg.push(string.slice(i, j));
    }
  }
  return newStrg;
};

console.log(allCombinations(string));

/* 

   4. Write a JavaScript function that returns a passed string 
   with letters in alphabetical order. 

*/

const alphaOrder = (string) => [...string].sort().join("");

console.log(alphaOrder(string));

/*

    5. Write a JavaScript function that accepts a string as a parameter and 
    converts the first letter of each word of the string in upper case. 

*/

const capitalizeEachWord = (string) => {
  return string
    .split(" ")
    .map((x) => x[0].toUpperCase() + x.slice(1))
    .join(" ");
};

console.log(capitalizeEachWord(string));

/* 
   6. Write a JavaScript function that 
   accepts a string as a parameter and find 
   the longest word within the string. 
*/

const largestString = (string) =>
  string.split(" ").reduce((a, c) => (a.length > c.length ? a : c));

console.log(largestString(string));

/* 
    7. Write a JavaScript function that accepts a string as a parameter and 
    counts the number of vowels within the string. 
    Note: As the letter 'y' can be regarded as both a vowel and
    a consonant, we do not count 'y' as vowel here. 

*/

const vowelCount = (str) => {
  str = str.split(" ");

  let vowel = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowel.length; j++) {
      if (str[i].includes(vowel[j])) {
        count++;
      }
    }
  }
  return count;
};

console.log(vowelCount(string));

/* 
    8. Write a JavaScript function that accepts a 
    number as a parameter and check the number is prime or not. 

*/

let number = 1;

// const isPrime = (number) => {
//   if (number < 2) {
//     return false;
//   } else if (number % 2 === 0 || number % 3 === 0 || number % 5 === 0) {
//     return false;
//   } else {
//     return true;
//   }
// };

const isPrime = (number) => {
  if (number <= 1) return false;
  if (number <= 3) return true;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
};

console.log(isPrime(number));

/*
   9.Write a JavaScript function which 
    accepts an argument and returns the type. 

*/

let type = function () {
  return 0;
};

const returnType = (type) => {
  return typeof type;
};

console.log(returnType(type));

/*
    10. Write a JavaScript function which returns 
    the n rows by n columns identity matrix. 
*/

/*
  11. Write a JavaScript function which will take 
  an array of numbers stored and find 
  the second lowest and second greatest numbers, respectively. 

*/

let arr = [1, 2, 3, 4, 5];

const secondLargestandSmallest = (arr) => [
  arr.sort((a, b) => b - a)[1],
  arr.sort((a, b) => a - b)[1],
];

console.log(secondLargestandSmallest(arr));

/*

  12. Write a JavaScript function which says 
  whether a number is perfect. 
  
 */

/*
  13. Write a JavaScript function to compute
  the factors of a positive integer. 
*/

/*
    14. Write a JavaScript function to convert
    an amount to coins. 

*/

/*

    15. Write a JavaScript function to compute the value of 
    bn where n is the exponent and b is the bases. 
    Accept b and n from the user and display the result. 

*/

const baseAndExponent = (b, n) => b ** n;

// const baseAndExponent = (b, n) => {
//     let answer = 1;
//     for( let i = 0; i < n; i++)
//        answer *= b
//     return answer;
//   };

console.log(baseAndExponent(2, 6));

/*
    16. Write a JavaScript function to extract 
    unique characters from a string. 
    
*/

const uniqueSring = (string) =>
  string
    .split("")
    .filter((element, index) => string.indexOf(element) === index)
    .join("");

console.log(uniqueSring(string));

/*

   17. Write a JavaScript function to get the 
   number of occurrences of each letter in specified string. 

*/

/*
   18. Write a function for searching JavaScript
   arrays with a binary search. 

*/

/*
    19. Write a JavaScript 
    function that returns array elements larger than a number. 

*/

/*
   20. Write a JavaScript function that generates a 
   string id (specified length) of random characters. 

*/

/*
    21. Write a JavaScript function to get all possible subset with 
    a fixed length (for example 2) combinations in an array. 
*/

/*
   22.Write a JavaScript function to get all possible subset 
   with a fixed length (for example 2) combinations in an array. 

*/

const countString = (string, targetLetter) => {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === targetLetter) {
      count++;
    }
  }

  return count;
};

console.log(countString("microsoft.com", "o"));

/*
   23. Write a JavaScript function to find the
   first not repeated character. 

*/

const firstUnique = (string) => {
  let arr1 = string
    .split("")
    .filter((element, index) => string.indexOf(element) !== index);

  let arr2 = string.split("");

  return arr2.filter((val) => !arr1.includes(val))[0];
};

console.log(firstUnique("abacddbec"));

/*
    24. Write a JavaScript function to apply Bubble Sort algorithm. 

*/

let bubbleSort = (inputArr) => {
  let len = inputArr.length;
  for (let i = 0; i < len; i++) {
    //console.log("outer loop: ", i);

    for (let j = i + 1; j < len; j++) {
      //console.log("inner loop", j);

      // switch the position
      if (inputArr[j] > inputArr[i]) {
        let tmp = inputArr[j];
        inputArr[j] = inputArr[i];
        inputArr[j] = tmp;
      }
    }
  }
  return inputArr;
};

console.log(bubbleSort([2, 4, 6, 7, 8, 9]));

/*
    25. Write a JavaScript function that accept a
    list of country names as input 
    and returns the longest country name as output. 

*/

const largestCountriesByName = (str) => {
  return str.map((value) => value.length).reduce((a, c) => (a > c ? a : c));
};

console.log(
  largestCountriesByName(["Australia", "Germany", "United States of America"])
);

/*

   26. Write a JavaScript function to find 
   longest substring in a given a 
   string without repeating characters. 

*/

// const longestSubstring = (string) => {
//   string
//     .split("")
//     .filter((element, index) => string.indexOf(element) !== index);

//   return string;
// };

// console.log(longestSubstring("testcase"));

/*
  27. Write a JavaScript function 
  that returns the longest palindrome in a given string. 

*/

const longestPalindrome = (string) => {
  let reverseStg = string.toLowerCase().split("").reverse().join("").split(" ");
};

console.log(longestPalindrome("This is test"));
