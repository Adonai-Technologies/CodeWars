// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
// The returned value must be a string, and have "***" between each of its letters.
// You should not remove or add elements from/to the array.

function twoSort(s) {
    // Sort the array alphabetically
      s.sort();
    
      // Take the first value from the sorted array
      let firstValue = s[0];
    
      // Join the letters of the first value with "***" in between
      let result = firstValue.split('').join('***');
    
      return result;
    }