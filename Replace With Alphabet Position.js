// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

// Define a function named alphabetPosition that takes a string 'text' as an argument

function alphabetPosition(text) {
    // Define a constant string 'alphabet' containing all lowercase letters of the alphabet
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    // Convert the input string 'text' to lowercase and store it in a variable 'lowerCaseText'
    const lowerCaseText = text.toLowerCase();
    // Initialize an empty string 'result' to store the positions of letters in the alphabet
    let result = '';
  
    // Iterate through each character in the 'lowerCaseText' string
    for (let i = 0; i < lowerCaseText.length; i++) {
      // Get the character at the current index 'i' of the 'lowerCaseText' string and store it in 'char'
      const char = lowerCaseText.charAt(i);
      // Get the Unicode value (character code) of the current character in 'char' and store it in 'charCode'
      const charCode = char.charCodeAt(0);
  
      // Check if the character code falls within the range of lowercase letters (97 to 122 in Unicode)
      if (charCode >= 97 && charCode <= 122) {
        // Find the position of the current character in the 'alphabet' string and add 1 (since index starts from 0)
        const position = alphabet.indexOf(char) + 1;
        // Append the position followed by a space to the 'result' string
        result += (position + ' ');
      }
    }
  
    // Remove trailing whitespace and return the resulting string of positions
    return result.trim();
  }