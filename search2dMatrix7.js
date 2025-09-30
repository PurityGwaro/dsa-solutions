/***
You are given an m x n integer matrix with the following two properties:

Each row is sorted in non-decreasing order (from left to right)
The first integer of each row is greater than the last integer of the previous row

Given an integer target, return true if the target is in the matrix, or false otherwise.
Constraint: You must write a solution with O(log(m * n)) time complexity.
Example 1:

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true

Example 2:

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
***/

const OneDArray = [1,2,3]
const twoDArray = [[1,2,3],[1,2,3],[1,2,3]]
const threeDArray = [[[1,2,3],[1,2,3],[1,2,3]], [[1,2,3],[1,2,3],[1,2,3]], [[1,2,3],[1,2,3],[1,2,3]]]

// solution 1 Brute Force Search or Linear Search - O(m * n) time complexity O(1) space
const twoDimensionLinearSolution = (matrix, target) => {
    for (let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++){
            console.log("i and j values", {i, j})
            if(matrix[i][j] === target) return true     
        }
    }
    return false
}

// OR -  O(m * n) time complexity O(1) space
function searchBrute(matrix, target) {
  const m = matrix.length;
  if (m === 0) return false;
  const n = matrix[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === target) return true;
    }
  }
  return false;
}

// Binary search option - O(log(m * n)) time and O(1) space
const twoDimensionBinarySolution = (matrix, target) => {
    const m = matrix.length
    if (m === 0) return false
    const n = matrix[0].length
    let left = 0
    let right = m * n - 1

    while(left <= right){
        const mid = Math.floor((left + right) / 2)
        const row = Math.floor(mid / n)
        const col = mid % n
        const val = matrix[row][col]

        if (val === target) return true
        if (val < target) left = mid + 1
        else right = mid - 1
    }
    return false
}

console.log("RESULT::::", twoDimensionLinearSolution([[1,2,3],[1,2,3],[1,2,3]], 3))
console.log("RESULT222222::::", twoDimensionBinarySolution([[1,2,3],[1,2,3],[1,2,3]], 3))
