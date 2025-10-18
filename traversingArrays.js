let arr = [2, 3, 45, 5, 23, 1, 3, 5, 7, 8, 65, 5, 34];

let result = [];

// reverse traversal on an array
for (let i = arr.length - 1; i >= 0; i--) {
  if (arr[i] !== 8 && arr[i] !== 5) {
    result.push(arr[i]);
  }
}

console.log(result);