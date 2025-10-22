// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Example 1: Input: nums = [100,4,200,1,3,2] Output: 4 Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Example 2: Input: nums = [0,3,7,2,5,8,4,6,0,1] Output: 9

const longestConsecutive = (nums) => {
    if (nums.length === 0) return 0
    nums.sort((a, b) => a - b)
    let sequence = 0
    // console.log("SORTED ARRAYYY:::", nums)
    for (let i = 0; i < nums.length; i++) {
        // if (nums[i] === nums[i - 1]) continue;
        if (nums[i + 1] - nums[i] === 1) {
            sequence += 1
        }
    }
    return sequence + 1
}

console.log("LONGEST SEQUENCE:::", longestConsecutive([100, 4, 4, 2, 200, 1, 3, 2]))

const solution2LongestConsecutive = (nums) => {
    if (nums.length === 0) return 0;

    nums.sort((a, b) => a - b);

    let longest = 1;
    let currentStreak = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) continue; // skip duplicates

        if (nums[i] - nums[i - 1] === 1) {
            currentStreak++;
        } else {
            longest = Math.max(longest, currentStreak);
            currentStreak = 1;
        }
    }

    return Math.max(longest, currentStreak);
}