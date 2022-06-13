//min
//1
/*
1. newFunc function() {}
2. let newFunc = function() {}
3. let newFunc = () => {}
*/

//2
function counterFunc(...args) {
	//var 1
	// let result = 0

	// for (k in args) {
	//   result ++
	// }

	// return result;

	//var 2
	return args.length;
}

console.log(counterFunc(2, 3, 4, 5));

//3
function sortFunc(a, b) {
	if (a > b) {
		return 1;
	} else if (a < b) {
		return -1;
	} else {
		return 0;
	}
}

console.log(sortFunc(1, 3));
console.log(sortFunc(3, 3));
console.log(sortFunc(10, 3));

// 4
function factorial(a) {
	let result = 1;

	for (let i = a; i != 0; i--) {
		result *= i;
	}

	return result;
}

console.log(factorial(5));

//5
function concat(...args) {
	let result = '';

	for (k in args) {
		result += args[k];
	}

	return result;
}

console.log(concat(1, 2, 3));
console.log(concat(1, 2, 3, 4, 5));

//6
function square(a, b = false) {
	return b ? a * b : a ** 2;
}

console.log(square(2, 6));
console.log(square(4));

//normal
//1
function isNumPerfect(a) {
	let dividersSum = 0;

	for (let i = 0; i < a; i++) {
		a % i == 0 ? (dividersSum += i) : false;
	}

	return dividersSum == a ? true : false;
}

console.log(isNumPerfect(6));

//2
function showPerfectNumsInRange(min, max) {
	for (let i = min; i <= max; i++) {
		isNumPerfect(i) ? console.log(`${i} is perfect`) : false;
	}
}

showPerfectNumsInRange(1, 10000);
