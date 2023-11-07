// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 
// 1
// 2
// +
// 2
// 2
// +
// 2
// 2
// =
// 9
// 1 
// 2
//  +2 
// 2
//  +2 
// 2
//  =9.



function squareSum(numbers){
    // Use map to square each number
    const squaredNumbers = numbers.map(num => num * num);
    
    // Use reduce to sum the squared values
    const sum = squaredNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    
    return sum;
  }
  