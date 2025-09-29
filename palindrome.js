// solution 1 - reverse string - O(n) time - O(n) space
const palindromReverseSolution = (s) => {
    //  remove non-numeric values, white space, underscore
    const cleanedString = s.replace(/[/\W_]/g, "").toLowerCase()
    const reversedCleanString = cleanedString.split("").reverse().join("")
    return reversedCleanString === cleanedString
}

// option 2 - using pointer - O(n) time - O(1) space

const palindromePointerSolution = (s) => {
    const isAlphanumeric = (c) => {
        return /[a-z0-9]/i.test(c)
    }
    let left = 0
    let right = s.length - 1

    while (left < right) {
        while (left < right && !isAlphanumeric(s[left])) {
            left++
        }
        while (left < right && !isAlphanumeric(s[right])) {
            right--
        }
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false
        }
        left++
        right--
    }
    return true
}

// console.log("REVERSE SOLUTION:::",palindromReverseSolution("hello"))
// console.log("POINTER SOLUTION:::",palindromePointerSolution("hello"))