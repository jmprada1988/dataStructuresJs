function addUpTo(n) { 
	let total = 0;
	for (let i = 1; i<= n; i++) {
	total += i;
	}
	return total;
}

function SecAddUpTo(n){
	return n * (n + 1) / 2;
}

let t1 = performance.now();
console.log(addUpTo(100000000000));
let t2 = performance.now();

let t3 = performance.now();
console.log(SecAddUpTo(100000000000));
let t4 = performance.now();

console.log(`Time elapsed: ${(t2 - t1)/ 1000} seconds for first method`);
console.log(`Time elapsed: ${(t4 - t3)/ 1000} seconds for second method`);
