// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
    // Return a new array with the strings filtered out
     return l.filter(item => typeof item === 'number' && item >= 0);
  }