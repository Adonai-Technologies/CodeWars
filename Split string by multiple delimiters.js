// Your task is to write function which takes string and list of delimiters as an input and returns list of strings/characters after splitting given string.

// Example:

// multipleSplit('Hi, how are you?', [' ']) => ['Hi,', 'how', 'are', 'you?']
// multipleSplit('1+2-3', ['+', '-']) => ['1', '2', '3']
// List of delimiters is optional and can be empty, so take that into account.

// Important note: Result cannot contain empty string.

function multipleSplit(str, delimiters) {
    if (!delimiters || delimiters.length === 0) {
      return str.split(/\s+/).filter(Boolean);
    }
  
    const escapeRegex = (input) => input.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  
    const delimiterPattern = new RegExp(
      delimiters.map((delimiter) => escapeRegex(delimiter)).join('|')
    );
  
    return str.split(delimiterPattern).filter(Boolean);
  }