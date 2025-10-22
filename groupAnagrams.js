// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// time complexity: O(N × M log M) space: O(N × M)
const groupAnagrams = (strs) => {
    const map = new Map() // key -sorted string value -list of words

    for (let i = 0; i < strs.length; i++) {
        const word = strs[i]
        const sorted = word.split('').sort().join('')
        if (map.has(sorted)) {
            map.get(sorted).push(word)
        } else {
            map.set(sorted, [word])
        }
    }
    return Array.from(map.values());
}

// same time and space complexity
const groupAnagramsSecondSolution = (strs) => {
    const map = new Map()

    for (let word of strs) {
        const sorted = word.split('').sort().join('')
        if (map.has(sorted)) {
            map.get(sorted).push(word)
        } else {
            map.set(sorted, [word])
        }
    }

    const groups = Array.from(map.values()).map(group => group.sort());
    return groups.sort((a, b) => a.length - b.length)
}

function anagramSolutionThree(strs) {
    const map = new Map()
    
    for (let word of strs) {
    const sorted = word.split('').sort().join('');
    if (!map.has(sorted)) {
      map.set(sorted, []);
    }
    map.get(sorted).push(word);
  }
    // return Array.from(map.values())
    const groups = Array.from(map.values()).map(group => group.sort());
    return groups.sort((a, b) => a.length - b.length)
}

console.log("HERE ARE THE ANAGRAMS:::", groupAnagramsSecondSolution(["eat", "tea", "tan", "ate", "nat", "bat"]))

