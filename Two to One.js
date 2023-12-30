// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


function longest(s1, s2) {
    // your code
    // Combine the strings and convert them into a Set to remove duplicates
    const combined = [...new Set(s1 + s2)];
  
    // Sort the unique characters and join them back into a string
    const sortedString = combined.sort().join('');
  
    return sortedString;
  }