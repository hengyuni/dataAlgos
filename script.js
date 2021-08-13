// calculates the sum of all numbers from 1 up to and including some number n //

// algo 1
// const addUpTo = (n) => {
// 	let total = 0;
// 	for (let i = 1; i <= n; i++) {
// 		total += i;
// 	} // Number of operations is (eventually) bounded by the multiple of 'n' so it would be an O(n)
// 	return total;
// };

// algo 2
// const addUpTo = (n) => {
// 	return (n * (n + 1)) / 2; // O(1) because there is only 3 operations and the operations dont change if 'n' grows. the operations will always stay the same
// };

// algo 3
const countUpAndDown = (n) => {
	console.log("Going Up!");
	for (let i = 0; i < n; i++) {
		// O(n) --> as n grows, operations also grow due to the loop
		console.log(i);
	}
	console.log("At the top! \nGoing Down...");
	for (let j = n - 1; j >= 0; j--) {
		console.log(j); //O(n)
	}
	console.log("Back on down");
}; // because its not nested its still running the O(n) because its not doubling and doing it seperately

// algo 4 nested loops
const printAllPairs = (n) => {
	for (let i = 0; i < n; i++) {
		// O(n)
		for (let j = 0; j < n; j++) {
			// O(n)
			console.log(i, j);
		}
	}
}; // O(n) operation inside of an O(n) operation = O(n)^2 because its nested

/**
O(2n) === O(n)
O(500) === O(1) the 500 doesnt interfere with n
o(13n2) === O(n2)

1. Arithmetic operations are constant
2. Variable assignment is constant
3. Accessing elements in an array(by index) or object (by key) os constant
4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop
*/

const logAtLeast5 = (n) => {
	for (let i = 1; i <= Math.max(5, n); i++) {
		console.log(i); // O(n) as N grows, number of operation also grows
	}
};

const logAtMost5 = (n) => {
	for (let i = 1; i <= Math.min(5, n); i++) {
		console.log(i); // O(1) because the min is 5, even if N grows, it's always going to be ran 5 times.
	}
};

const output = countUpAndDown(10);
console.log(output);
