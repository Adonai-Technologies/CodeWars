// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

function sumMix(x){
let sum = 0;
    for (let i = 0; i < x.length; i++) {
      if (typeof x[i] === 'number') {
        sum += x[i];
      } else if (typeof x[i] === 'string' && !isNaN(x[i])) {
        // If the element is a string that represents a number, convert it to a number and add it to the sum.
        sum += Number(x[i]);
      }
    }
  
    return sum;
  }