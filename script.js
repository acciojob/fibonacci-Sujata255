function fibonacci(num)

if(n === 1){
	return 0;
}
	
else if(n===2){
	return 1;
}
	

let a = 0, b = 1;
for (let i = 3; i <= num; i++){
	let temp = a + b;
	a = b;
	b = temp;
}
return b;
} 
module.exports = fibonacci;