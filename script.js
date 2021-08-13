// calculates the sum of all numbers from 1 up to and including some number n //

// method 1
// const addUpTo = (n) => {
// 	let total = 0;
// 	for (let i = 1; i <= n; i++) {
// 		total += i;
// 	}
// 	return total;
// };

// method 2
const addUpTo = (n) => {
	return (n * (n + 1)) / 2;
};

const output = addUpTo(21);
console.log(output);
