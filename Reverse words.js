// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
  }
  
//  The split() method is used to split the string into an array of words. 
//   Then, the map() method is used to iterate over each word in the array and reverse it. Finally, the join()
//    method is used to join the reversed words back into a string with spaces.