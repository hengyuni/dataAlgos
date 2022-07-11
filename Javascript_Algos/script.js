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
	console.log('Going Up!');
	for (let i = 0; i < n; i++) {
		// O(n) --> as n grows, operations also grow due to the loop
		console.log(i);
	}
	console.log('At the top! \nGoing Down...');
	for (let j = n - 1; j >= 0; j--) {
		console.log(j); //O(n)
	}
	console.log('Back on down');
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

// function charCount2(str) {
// 	let obj = {};
// 	for (let i = 0; i < str.length; i++) {
// 		let char = str[i].toLowerCase();
// 		if (/[a-z0-9]/.test(char)) {
// 			if (obj[char] > 0) {
// 				obj[char]++;
// 			} else {
// 				obj[char] = 1;
// 			}
// 		}
// 		return obj;
// 	}
// }

// function charCounter(str) {
// 	let obj = {};
// 	for (let char of str) {
// 		char = char.toLowerCase();
// 		if (/[a-z0-9]/.test(char)) {
// 			obj[char] = ++obj[char] || 1;
// 		}
// 		return obj;
// 	}
// }

const charCounter = (str) => {
	let obj = {};
	for (let char of str) {
		char = char.toLowerCase();
		if (isAlphaNumeric(char)) {
			obj[char] = ++obj[char] || 1;
		}
	}
	return obj;
};

const isAlphaNumeric = (char) => {
	let code = char.charCodeAt(0);
	if (
		!(code > 47 && code < 58) && // numeric (0-9)
		!(code > 64 && code < 91) && // upper alpha (A-Z)
		!(code > 96 && code < 123) // lower alpha (a-z)
	) {
		return false;
	}
	return true;
};

///// RECAP!!! //////
// understand problem
// explor concrete examples
// break it down
// sole/simplify
// look back and refactor

/////////////////////////////////////////
// SECTION 5: Problem solving patters //
////////////////////////////////////////

//  PATTERN 1: FREQUENCY COUNTER //
/* Uses objects ot sets to collect values/frequency of values */
/* Can often avoid the need for a nested loops or O(N^2) operations with arrays/strings */

// write a function called same, accpts 2 arrays, functions hould return true is every value in the array has its corresponding value squared in the second array. the frequency of values must be the same

// O(n^2) solution **Naive Solution**
function same(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	for (let i = 0; i < arr1.length; i++) {
		let correctIndex = arr2.indexOf(arr1[i] ** 2); // indexOf is O(n) because its technically looping, thus making it a nested loop.
		if (correctIndex === -1) {
			return false;
		}
		console.log(arr2);
		arr2.splice(correctIndex, 1);
	}
	return true;
}

// O(n) solution
function same2(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	let frequencyCounter1 = {};
	let frequencyCounter2 = {};
	for (let val of arr1) {
		frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
	}
	for (let val of arr2) {
		frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
	}
	for (let key in frequencyCounter1) {
		if (!(key ** 2 in frequencyCounter2)) {
			return false;
		}
		if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
			return false;
		}
	}
	console.log(frequencyCounter1);
	console.log(frequencyCounter2);
	return true;
}

// Valid Anagram

function validAnagram(first, second) {
	if (first.length !== second.length) {
		return false;
	}

	const lookup = {};

	for (let i = 0; i < first.length; i++) {
		let letter = first[i];
		// if letter exists, increment, otherwise set to 1
		lookup[letter] ? lookup[letter]++ : (lookup[letter] = 1);
	}
	for (let i = 0; i < second.length; i++) {
		let letter = second[i];
		// cant find letter or letter is zero then its not an anagram
		if (!lookup[letter]) {
			console.log(lookup);
			return false;
		} else {
			lookup[letter]--;
		}
	}
	console.log(lookup);
	return true;
}

//////////////////////////

// PATTERN 2: MULTIPLE POINTERS //
// creating ponters or values that correspond to an index or position and move towards the beginning end or middle based on a certain condition
// ** very efficient for solving problems with minimal space complexity as well

// sum zero naive **O(n^2)
function sumZero(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === 0) {
				return [arr[i], arr[j]];
			}
		}
	}
}
// sum zero refactor **O(n)
// time complexity O(n)
// space complexity O(1)
function sumZero2(arr) {
	let left = 0;
	let right = arr.length - 1;
	while (left < right) {
		let sum = arr[left] + arr[right];
		if (sum === 0) {
			return [arr[left], arr[right]];
		} else if (sum > 0) {
			right--;
		} else {
			left++;
		}
	}
}

// Count Unique Values
// implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted
/*
countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4
*/
function countUniqueValues(arr) {
	let i = 0;
	if (arr.length === 0) {
		return 0;
	}
	// j will start at index of 1 and iterate through the array
	for (let j = 1; j < arr.length; j++) {
		// if arr[i] is not equal to arr[j] move i up by 1, when equal make i = j
		if (arr[i] !== arr[j]) {
			i++;
			arr[i] = arr[j];
		}
		// console.log(i, j);
	}
	return i + 1;
}

// PATTERN 3: SLIDING WINDOW //
// this pattern involes creating a *window* which can either be an array or number from one position to another
// depending on a certain condition, the window either increases or closes(and a new window is created)
// very useful for keeping track of a subset of data in an array/string etc,

// write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array

// naiva solution **nested loop makes it O(n^2)
function maxSubarraySum(arr, num) {
	if (num > arr.length) {
		return null;
	}
	var max = -Infinity;
	for (let i = 0; i < arr.length - num + 1; i++) {
		temp = 0;
		for (let j = 0; j < num; j++) {
			temp += arr[i + j];
		}
		if (temp > max) {
			max = temp;
		}
	}
	return max;
}

// refactored solution
function maxSubarraySum2(arr, num) {
	let maxSum = 0;
	let tempSum = 0;
	if (arr.length < num) return null;
	for (let i = 0; i < num; i++) {
		maxSum += arr[i];
	}
	tempSum = maxSum;
	for (let i = num; i < arr.length; i++) {
		tempSum = tempSum - arr[i - num] + arr[i];
		maxSum = Math.max(maxSum, tempSum);
	}
	return maxSum;
}

// PATTERN 4: DIVIDE AND CONQUER //
// this pattern involves dividing a data set into smaller chuncks and then repeating a process with a subset of data.
// this pattern can tremendously *decrease time complexity*

// Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1
/*
search([1,2,3,4,5,6], 4) // 3
search([1,2,3,4,5,6], 6) // 5
search([1,2,3,4,5,6], 11) // -1
*/

// naive solution *O(n)* though
function search(arr, val) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === val) {
			return i;
		}
	}
	return -1;
}

// refactor log(n) solution
function search2(arr, val) {
	let min = 0;
	let max = arr.length - 1;

	while (min <= max) {
		let middle = Math.floor((min + max) / 2);
		let currentElement = arr[middle];

		if (arr[middle] < val) {
			min = middle + 1;
		} else if (arr[middle] > val) {
			max = middle - 1;
		} else {
			return middle;
		}
	}
	return -1;
}

// change string to camel case
function toCamelCase(str) {
	let strArr = str.split();
}

const output = findNumber('REUONNOINFE');
console.log(output);

function toCamelCase(str) {
	let strArr = str.split();
}

const output = findNumber('REUONNOINFE');
console.log(output);
