// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.


function positiveSum(arr) {
    let positiveNums = []
   for(let i = 0; i< arr.length; i++){
     if(arr[i]>= 0){
       positiveNums.push(arr[i]) 
     }
    }
      return positiveNums.reduce((x,i) => x+i,0) 
   }