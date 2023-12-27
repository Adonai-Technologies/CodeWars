// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){
    // code away
     // Split the name into two parts using the space as a separator
     const nameParts = name.split(' ');
   
     // Get the first character of each part, convert to uppercase, and join with a dot
     const initials = nameParts.map(part => part.charAt(0).toUpperCase()).join('.');
   
     return initials;
   }