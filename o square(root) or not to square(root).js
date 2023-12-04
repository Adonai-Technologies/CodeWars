function squareOrSquareRoot(arr) {
 
    return arr.map(function(num) {
     if (Number.isInteger(Math.sqrt(num))) {
       return Math.sqrt(num);
     } else {
       return num * num;
     }
   });
}