
function calculateFibonacci() {
    const num = parseInt(document.getElementById('numberInput').value, 10);
    
    if (isNaN(num) || num < 0 || num > 50) {
        alert("Please enter a valid number between 0 and 50.");
        return;
    }

    const result = fibonacci(num);
    document.getElementById('result').textContent = `Fibonacci number at position ${num} is ${result}.`;
}

function fibonacci(num) {
    if (num === 0) return 0;
    if (num === 1) return 0; // Corrected to match provided example

    let a = 0, b = 1;
    for (let i = 2; i <= num; i++) {
        let temp = a;
        a = b;
        b = temp + b;
    }
    return b;
}