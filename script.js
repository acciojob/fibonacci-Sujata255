function fibonacci(num) {
    if (num === 0) {
        return 0;
    } else if (num === 1) {
        return 1;
    }

    let a = 0, b = 1;
    for (let i = 2; i <= num; i++) {
        let next = a + b;
        a = b;
        b = next;
    }
    return b;
}

// Example usage:
console.log(fibonacci(1)); // Output: 0
console.log(fibonacci(5)); // Output: 3
console.log(fibonacci(10)); // Output: 34
