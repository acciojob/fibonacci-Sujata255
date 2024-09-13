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