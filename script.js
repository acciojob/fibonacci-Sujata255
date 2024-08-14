
function fibonacci(N) // returns the Nth Fibonacci Number
{
let a = 0; // Pos 1 || 1st Finonacci Number || Position 1 in the Fibo. Series 
let b = 1;  // Pos 2 || 2nd Finonacci Number || Position 2 in the Fibo. Series 
let c = 0; // Should be position 3
let currentPosition = 3;
while (currentPosition <= N) { // Exit when N+1 happens; so c would've been calculated as Position Nth in the Fibo. Series 
    c = a + b;
     a = b; // n-2th
      b = c; // n-1th value
    ++currentPosition;
}
return c;
}