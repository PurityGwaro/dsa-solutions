// divide and conquer algorithm
// Split the array into halves until each half has 1 element
// Merge laves back together in sorted order
function mergeSort(array){
    if(array.length <= 1) return array
    const mid = Math.floor(array.length/2)
    const left = mergeSort(array.slice(0, mid))
    const right = mergeSort(array.slice(mid))

    return merge(left, right)
}

function merge(left, right){
    const result = []
    let i = 0, j = 0

    while(i < left.length && j < right.length){
        if(left[i] < right[j]) result.push(left[i++])
        else result.push(right[j++])
    }

    return result.concat(left.slice(i)).concat(right.slice(j))
}

console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]));