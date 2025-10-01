// Consider an array of numeric strings where each string is a positive number with anywhere from  to  digits. Sort the array's elements in non-decreasing, or ascending order of their integer values and return the sorted array.

// Example

// Return the array ['1', '3', '150', '200'].

// You can't convert these strings to regular numbers because they're too big (up to 1 million digits). Regular integers overflow!
// You need to write a custom comparison function that compares two numeric strings without converting them to numbers
// Step 1: Understand How to Compare Two Numeric Strings
// When comparing two numbers as strings like "123" and "45":
// Rule 1: If they have different lengths, the longer one is bigger

// "123" (length 3) vs "45" (length 2) → "123" is bigger

// Rule 2: If they have the same length, compare them character by character (lexicographically)

// "123" vs "145" → Compare digit by digit: 1=1, 2<4 → "123" is smaller

const sortSolutionOne = (unsorted) => {
    return unsorted.sort((a,b) => {
        if(a.length !== b.length){
            return a.length - b.length
        }

        if(a < b) return -1
        if(a > b) return 1
        return 0
    })
}

// OR
// The || operator means: "If lengths are different, use that; otherwise, compare the strings"
function bigSorting(unsorted) {
    return unsorted.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    });
}

console.log("sortedsolution1:::::", sortSolutionOne(['31415926535897932384626433832795', '1', '3', '10', '2', '3', '5']))