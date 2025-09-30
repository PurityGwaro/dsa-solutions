// two numbers adding up to target value
// first number less than second number
// can only be one solution
// cannot use the same number twice
// return indices of the two numbers

// Solution 1 - Brute Force O(n^2) time - works on unsorted array
const sumTwoNumbers = (numbersArray, target) => {
    for (let i = 0; i < numbersArray.length; i++) {
        for (let j = i + 1; j < numbersArray.length; j++) {
            if (numbersArray[i] + numbersArray[j] === target) {
                return [i + 1, j + 1]
            }
        }
    }
}

// solution 2 - Hash map approach - O(n) time, O(n) space - works on unsorted array
const hashMapSumTwoSolution = (array, target) => {
    const map = new Map()

    for (let i = 0; i < array.length; i++) {
        let complement = target - array[i]
        if (map.has(complement)) {
            return [map.get(complement) + 1, i + 1]
        }
        map.set(array[i], i)
    }
}

// solution 3 - Two Pointers → O(n) time, O(1) space- only works on sorted array
const sumTwoNumbersPointerSolution = (array, target) => {
    // ensure array is sorted first
    // const sorted = [...array].sort((a, b) => a - b); - do this only when we are given an array that is not sorted

    let left = 0
    let right = array.length - 1

    while (left < right) {
        const sum = array[left] + array[right]
        if (sum === target) return [left + 1, right + 1]
        else if (sum > target) right--
        else if (sum < target) left++
    }
}

console.log("bruteforce solution:::", sumTwoNumbers([2, 4, 5, 6, 10], 10))
console.log("hashmap solution:::", hashMapSumTwoSolution([2, 4, 5, 6, 10], 10))
console.log("twopointer solution:::", sumTwoNumbersPointerSolution([2, 4, 5, 6, 10], 10))