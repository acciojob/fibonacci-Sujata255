function fibonacci(num) {
    if (num === 0) return 0;
    if (num === 1) return 1;

    let a = 0;
    let b = 1;
    let fib;

    for (let i = 2; i <= num; i++) {
        fib = a + b;
        a = b;
        b = fib;
    }

    return b;
}

function getFibonacci() {
    const input = document.getElementById("fibonacciInput").value;
    const num = parseInt(input);

    // Ensure the input is within the valid range
    if (isNaN(num) || num < 0 || num > 50) {
        document.getElementById("result").textContent = "Please enter a number between 0 and 50.";
    } else {
        const result = fibonacci(num);
        document.getElementById("result").textContent = `Fibonacci(${num}) = ${result}`;
    }
}