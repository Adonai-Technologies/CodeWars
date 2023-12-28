// The main idea is to count all the occurring characters in a string. If you have a string like aba,
//  then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(str) {
    const charCount = {};
 
   // Iterate through each character in the string
   for (let char of str) {
     // If character exists in charCount, increment count, otherwise initialize it to 1
     charCount[char] = (charCount[char] || 0) + 1;
   }
 
   return charCount;
 }