// another divide and conquer algorithm
// 1. pick a pivot element
// 2. Partition array into:
// left: values < pivot
// right: values > pivot
// 3.Recursively sort left and right.

function quickSort(array){
    if(array.length <= 1) return array
    const pivot = array[array.length - 1] // last element as pivot
    const left = [], right = []

    for(let i = 0; i < array.length - 1; i++){
        if(array[i] < pivot) left.push(array[i])
        else right.push(array[i])
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([3,6,8,10,1,2,1]));