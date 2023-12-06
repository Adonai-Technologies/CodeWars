// N lamps are placed in a line, some are switched on and some are off. What is the smallest number of lamps that need to be switched so that on and off lamps will alternate with each other?

// You are given an array a of zeros and ones - 1 mean switched-on lamp and 0 means switched-off.

// Your task is to find the smallest number of lamps that need to be switched.

// Example
// For a = [1, 0, 0, 1, 1, 1, 0], the result should be 3.

//  a     --> 1 0 0 1 1 1 0  swith --> 0 1     0  became--> 0 1 0 1 0 1 0

// Input/Output
// [input] integer array a
// array of zeros and ones - initial lamp setup, 1 mean switched-on lamp and 0 means switched-off.

// 2 < a.length <= 1000

// [output] an integer
// minimum number of switches.


function lamps(a) {
    for(var r1=0,r2=0,i=0;i<a.length;i++){
     r1+=(a[i]!==i%2)
     r2+=(a[i]!==(i+1)%2)
   }
   return Math.min(r1,r2)
 }