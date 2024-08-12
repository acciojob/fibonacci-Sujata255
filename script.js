function calculateFibonacci() {
    // Get the value from the input field
    let num = document.getElementById('numberInput').value;

    // Calculate the Fibonacci number
    let fibNum = fibonacci(num);

    // Display the result
    document.getElementById('result').innerText = fibNum;
}

function fibonacci(num) {
    if (num === 1) return 0;  // first number in Fibonacci sequence is 0
    if (num === 2) return 1;  // second number in Fibonacci sequence is 1

    let a = 0, b = 1;
    for (let i = 2; i < num; i++) {
        let temp = a;
        a = b;
        b = temp + b;
    }
    return b; // return the nth Fibonacci number
}