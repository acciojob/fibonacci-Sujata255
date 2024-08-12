function fibonacci(num) {
    if (num === 0) return 0;
    if (num === 1) return 1;

    let a = 0, b = 1;
    for (let i = 2; i <= num; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}

module.exports = fibonacci;