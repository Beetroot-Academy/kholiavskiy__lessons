let drandulet = {
	produce: 'BMW',
	model: 'X5',
	year: 2018,
	averSpeed: 160,
	fuelCapacity: 85,
	fuelConsume: 7.5,
	drivers: [],
	fuel: 0,
};

//1.1
function showInfo(car) {
	console.log(`${car.produce}-${car.model}
year: ${car.year}
averagespeed: ${car.averSpeed} km/h,
fuel capacity: ${car.fuelCapacity} l,
fuel consume for 100km: ${car.fuelConsume} l
fuel: ${car.fuel} l`);
}

//1.2
function addDriver(car, driver) {
	return car.drivers.push(driver);
}

//1.3
function setFuel(car, fuel) {
	if ((car.fuel += fuel > car.fuelCapacity)) {
		car.fuel = car.fuelCapacity;
	} else {
		car.fuel += fuel;
	}
}

//1.4
function getTravellTime(car, driver, distance) {
	const neededFuelForTravell = (car.fuelConsume / 100).toFixed(2) * distance;

	if (!car.drivers.includes(driver)) {
		console.error(`Driver Error: ${driver} is not allowed`);
		return;
	}

	if (neededFuelForTravell > car.fuel) {
		let result = confirm(
			'You will run out of fuel. Do you want to fill up the tank?'
		);
		if (result) {
			setFuel(neededFuelForTravell - car.fuel);
		}
	}

	let moveingTime = distance / car.averSpeed;
	let breaksTime = ~~(moveingTime / 4);
	let travellTime = (breaksTime + moveingTime).toFixed(2);
	console.log(`You will need ${travellTime} hours`);
}

// showInfo(drandulet);
// addDriver(drandulet, 'Ivan');
// setFuel(drandulet, 50);
// getTravellTime(drandulet, 'Ivan', 1500);

let date = {
	hours: 2,
	minutes: 15,
	seconds: 30,
};

//2.1
function showTime(date) {
	let hours = addZeroBeforeNumber(date.hours);
	let minutes = addZeroBeforeNumber(date.minutes);
	let seconds = addZeroBeforeNumber(date.seconds);
	console.log(`${hours}:${minutes}:${seconds}`);
}

function addZeroBeforeNumber(num) {
	return num < 10 ? '0' + num : num;
}

//2.2
function addSeconds(date, seconds) {
	let secondsAmount = date.seconds + seconds;

	if (secondsAmount >= 60) {
		date.seconds = secondsAmount % 60;
		addMinutes(date, ~~(secondsAmount / 60));
	} else {
		date.seconds = secondsAmount;
	}
}

//2.3
function addMinutes(date, minutes) {
	let minutesAmount = date.minutes + minutes;

	if (minutesAmount >= 60) {
		date.minutes = minutesAmount % 60;
		addHours(date, ~~(minutesAmount / 60));
	} else {
		date.minutes = minutesAmount;
	}
}

//2.4
function addHours(date, hours) {
	let hoursAmount = date.hours + hours;

	if (hoursAmount >= 24) {
		date.hours = hoursAmount % 24;
	} else {
		date.hours = hoursAmount;
	}
}

// showTime(date);
// addSeconds(date, 10);
// showTime(date);

//max
let firstFraction = {
	numerator: 3,
	denominator: 5,
};

let secondFraction = {
	numerator: 2,
	denominator: 5,
};

let fractionMath = function (firstObj, secondObj) {
	return {
		...firstObj,
		secondObj,
		//this method will used only for reduction
		getBiggestDivider: function (a, b) {
			let divider = false;

			for (let i = 2; ; i++) {
				if (i > a && i > b) break;
				if (a % i == 0 && b % i == 0) divider = i;
			}

			return divider;
		},

		summFractions: function () {
			if (firstObj.denominator == secondObj.denominator) {
				return this.reductionFraction({
					numerator: firstObj.numerator + secondObj.numerator,
					denominator: firstObj.denominator,
				});
			} else {
				return this.reductionFraction({
					numerator:
						firstObj.numerator * secondObj.denominator +
						secondObj.numerator * firstObj.denominator,
					denominator: firstObj.denominator * secondObj.denominator,
				});
			}
		},

		reduceFractions: function () {
			if (firstObj.denominator == secondObj.denominator) {
				return this.reductionFraction({
					numerator: firstObj.numerator - secondObj.numerator,
					denominator: firstObj.denominator,
				});
			} else {
				return this.reductionFraction({
					numerator:
						firstObj.numerator * secondObj.denominator -
						secondObj.numerator * firstObj.denominator,
					denominator: firstObj.denominator * secondObj.denominator,
				});
			}
		},

		multiplicationFractions: function () {
			return this.reductionFraction({
				numerator: firstObj.numerator * secondObj.numerator,
				denominator: firstObj.denominator * secondObj.denominator,
			});
		},

		divisionFractions: function () {
			return this.reductionFraction({
				numerator: firstObj.numerator * secondObj.denominator,
				denominator: firstObj.denominator * secondObj.numerator,
			});
		},

		reductionFraction: function (obj = firstObj) {
			let divider = this.getBiggestDivider(obj.numerator, obj.denominator);

			//if cant make reduction it will return original object
			if (!divider) {
				return obj;
			}

			return {
				numerator: obj.numerator / divider,
				denominator: obj.denominator / divider,
			};
		},
	};
};

console.log(fractionMath(firstFraction, secondFraction).summFractions());
console.log(fractionMath(firstFraction, secondFraction).reduceFractions());
console.log(
	fractionMath(firstFraction, secondFraction).multiplicationFractions()
);
console.log(fractionMath(firstFraction, secondFraction).divisionFractions());
console.log(fractionMath(firstFraction).reductionFraction());
