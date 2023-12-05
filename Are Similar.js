// Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements.

// Given two arrays, check whether they are similar.

// Example
// For A = [1, 2, 3] and B = [1, 2, 3], the output should be true;

// For A = [1, 2, 3] and B = [2, 1, 3], the output should be true;

// For A = [1, 2, 2] and B = [2, 1, 1], the output should be false.

// Input/Output
// [input] integer array A

// Array of integers.

// Constraints: 3 ≤ A.length ≤ 10000, 1 ≤ A[i] ≤ 1000.

// [input] integer array B

// Array of integers of the same length as A.

// Constraints: B.length = A.length, 1 ≤ B[i] ≤ 1000.

// [output] a boolean value

// true if A and B are similar, false otherwise.


function areSimilar(a, b) {
    if (a.length !== b.length) {
        return false;
    }

    let diff = 0;
    let a1 = -1;
    let a2 = -1;
    let b1 = -1;
    let b2 = -1;

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            diff++;

            if (diff > 2) {
                return false;
            }

            if (a1 === -1) {
                a1 = i;
                b1 = i;
            } else if (a2 === -1) {
                a2 = i;
                b2 = i;
            } else {
                return false;
            }
        }
    }

    return diff === 0 || (diff === 2 && a[a1] === b[b2] && a[a2] === b[b1]);
}
