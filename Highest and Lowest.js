// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.



function highAndLow(numbers) {
    // Split the input string into an array of numbers
    const numArray = numbers.split(' ').map(Number);
    
    // Find the maximum and minimum numbers
    const max = Math.max(...numArray);
    const min = Math.min(...numArray);
    
    // Return the result as a string
    return `${max} ${min}`;
}

// Test cases
console.log(highAndLow("1 2 3 4 5"));   // Output: "5 1"
console.log(highAndLow("1 2 -3 4 5"));  // Output: "5 -3"
console.log(highAndLow("1 9 3 4 -5"));  // Output: "9 -5"
