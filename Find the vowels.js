// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).
// So given a string "super", we should return a list of [2, 4].
// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
// NOTES
// Vowels in this context refers to: a e i o u y (including upper case)
// This is indexed from [1..n] (not zero indexed!)

function vowelIndices(word){
    //your code here
     const vowels = ['a', 'e', 'i', 'o', 'u', 'y']; // Considering 'y' as a vowel in this case
    const indices = [];
  
    for (let i = 0; i < word.length; i++) {
      const lowercaseChar = word[i].toLowerCase();
      if (vowels.includes(lowercaseChar)) {
        indices.push(i + 1); // Adding 1 to get the 1-based index
      }
    }
  
    return indices;
    }
  