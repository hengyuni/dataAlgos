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

// Space Complexity in JS (rule of thumb) //
// Most primitives (booleans, numbers, undefined, null) are constant space
// Strings require O(n) space (where n is the string length)
// Reference type are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

/* Big O of Objects
Insertion - O(1)
Removal - O(1)
Searching - O(n)
Access - O(1)

--Big O of Object Methods--
Object.keys - O(n)
Object.values - O(n)
Objects.entries - O(n)
hasOwnProperty - O(n)
*/

// let instructor = {
// 	firstname: "kelly",
// 	isInstructor: true,
// 	favoriteNumbers: [1, 2, 3, 4],
// };

// console.log(instructor.hasOwnProperty("firstname"));

/* --Big O of Arrays--
Insertion - depends
when adding its constant time. the prolem is when we try to insert in the beginning because we have to rearranging (re indexing) to the whole array

Removal - Depends
Remoing from beginning gives the same problem because the order has to be rearranged
** push() and pop() is always faster than shift() and unshift()

Searching - O(n)
the search grows as more items are in the array
Access - O(1)

-push - O(1)
-pop - O(1)
-shift - O(n)
-unshift - O(n)
-concat - O(n)
-slice - O(n)
-splice - O(n)
-sort - O(n*logn)
-forEach/map/filter/reduce/etc. - O(n)
*/

//Write a function which takes in a string and returns counts of each character in the string

// charCount("hello"); // {h:1, e:1, l:2 o:1}

function charCount(str) {
	// make object to return at end
	let result = {};
	// loop over string for each character...
	for (let i = 0; i < str.length; i++) {
		let char = str[i].toLowerCase();
		// if the char is a number/letter AND key in object, add one to count
		if (result[char] > 0) {
			result[char]++;
			// if the char is a number/letter AND not in object, add it and set value to 1
		} else {
			result[char] = 1;
		}
	}
	//if characer i sosmething else (space, period, etc.) dont do anything
	// return object at end
	return result;
}

const output = charCount("Hi there!");
console.log(output);
