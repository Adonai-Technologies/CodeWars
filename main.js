
// Remove First and Last Character

function removeChar(str){
     if (str.length < 2) {
           return str; 
       } else {
           return str.substring(1, str.length - 1); 
       }
   };


// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url) {
    // Split the URL at the "#" character
    const parts = url.split('#');
    // Take the first part of the split array
    const result = parts[0];
    return result;
  }
  
  const url1 = "www.codewars.com#about";
  const url2 = "www.codewars.com?page=1";
  
  console.log(removeUrlAnchor(url1));  // Output: "www.codewars.com"
  console.log(removeUrlAnchor(url2));  // Output: "www.codewars.com?page=1"
  