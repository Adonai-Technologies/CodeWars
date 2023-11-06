// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

function sumTwoSmallestNumbers(numbers) {  
    // Sort the array in ascending order
   numbers.sort((a, b) => a - b);
   
   // Take the first two elements (the two smallest numbers)
   const [first, second] = numbers;
 
   // Return their sum
   return first + second;
 }