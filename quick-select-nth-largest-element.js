// Given an integer array nums and an integer k, return the kth largest element in the array. Note that it is the kth largest element in the sorted order, not the kth distinct element
/*
1. sort the array from largest to smallest
2. Find the kth largest array[k-1]
*/
//  so there is quick sort and there is quick select

// solution 1 using the .sort function
// O(n log n) time
// changes the original array in place - so it is O(1) space because it does not use new space in the machine
const solutionOne = (array, k) => {
    const reverselySorted = array.sort((a, b) => b - a)
    return reverselySorted[k - 1]
}

const findKthLargest = (nums, k) => {
    const targetIndex = nums.length - k
    return quickSelect(nums, 0, nums.length - 1, targetIndex)
}

const quickSelect = (array, left, right, targetIndex) => {
    if (left === right) return array[left]

    const pivotIndex = partition(array, left, right)

    if (pivotIndex === targetIndex) return array[pivotIndex]
    else if (pivotIndex > targetIndex)
        return quickSelect(array, left, pivotIndex - 1, targetIndex)
    else
        return quickSelect(array, pivotIndex + 1, right, targetIndex)
}

const partition = (array, left, right) => {
    const pivot = array[right]
    let p = left
    for (i = left; i < right; i++) {
        if (array[i] <= pivot) {
            [array[i], array[p]] = [array[p], array[i]]
            p++
        }
    }
    [array[p], array[right]] = [array[right], array[p]]
    return p
}

console.log("solutionOne::::", solutionOne([3, 2, 1, 5, 6, 4], 2)); // 5
