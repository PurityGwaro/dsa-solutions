// A function that calls itself until a base condition is met
// Think of it like Russian dolls: each doll opens to reveal a smaller one, until the smallest one (base case)
// Example: Countdown
function countdown(n){
    if(n === 0){
        console.log("Done!")
        return;
    }
    console.log(n)
    countdown(n-1)
}
// Factorial
// Example: 5! = 5×4×3×2×1 = 120
const factorial = (n) => {
    if(n === 0 || n === 1) return 1
    return n * factorial(n-1)
}

// console.log(factorial(5)) //120
// Fibonacci sequence
// Numbers where each number is the sum of the previous two.
// 0, 1, 1, 2, 3, 5, 8, 13...
const fibonacciSequence = (n) => {
    if(n <= 1) return n
    return fibonacciSequence(n-1) + fibonacciSequence(n -2)
}
// console.log(fibonacciSequence(6)) //8