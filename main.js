
// Remove First and Last Character

function removeChar(str){
     if (str.length < 2) {
           return str; 
       } else {
           return str.substring(1, str.length - 1); 
       }
   };


// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url) {
    // Split the URL at the "#" character
    const parts = url.split('#');
    // Take the first part of the split array
    const result = parts[0];
    return result;
  }
  
  const url1 = "www.codewars.com#about";
  const url2 = "www.codewars.com?page=1";
  
  console.log(removeUrlAnchor(url1));  // Output: "www.codewars.com"
  console.log(removeUrlAnchor(url2));  // Output: "www.codewars.com?page=1"
  


//   An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
//   Note: anagrams are case insensitive
//   Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

  function areAnagrams(str1, str2) {
    // Remove spaces and convert to lowercase
    const cleanStr1 = str1.replace(/\s+/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/\s+/g, '').toLowerCase();
  
    // Sort the characters and compare the resulting strings
    return cleanStr1.split('').sort().join('') === cleanStr2.split('').sort().join('');
  }
  
  // Example usage:
  console.log(areAnagrams("listen", "silent")); // true
  console.log(areAnagrams("hello", "world"));   // false
  