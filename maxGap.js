// Given an integer array nums, return the maximum difference between two successive elements in its sorted form. If the array contains less than two elements, return 0.
// You must write an algorithm that runs in linear time and uses linear extra space.

function maxGap(nums) {
    if(nums.length < 2) return 0
    const sortedArray = nums.sort((a, b) => a - b)
    const differenceArray = []
    for(let i = 0; i < nums.length-1; i++){
      differenceArray.push(sortedArray[i+1] - sortedArray[i])
    }
    return differenceArray[differenceArray.length - 1]
}


console.log("THE LARGEST DIFFERENCE::::", maxGap( [3,6,9,1]))

// Solution2 - better - uses O(n) on both complexities
function maxGapSolution2(nums) {
    if(nums.length < 2) return 0
    nums.sort((a, b) => a - b)
    let maxDiff = 0
    for(let i = 0; i < nums.length - 1; i++){
        maxDiff = Math.max(maxDiff, nums[i+1] - nums[i])
    }
    return maxDiff
}