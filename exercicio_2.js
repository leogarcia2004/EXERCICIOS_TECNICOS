

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

function fibonacciArray(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(fibonacci(i));
    }
    return arr.includes(n) ? `O numero ${n} pertence à sequência de Fibonacci ${arr}.` : `O número ${n} não pertence à sequência de Fibonacci ${arr}.`;
}

console.log(fibonacciArray(19));
console.log(fibonacciArray(21));