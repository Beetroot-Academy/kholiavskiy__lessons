let shoppingList = [
	{
		name: 'banana',
		qty: 2,
		bought: false,
		price: 10,
		amount: function () {
			return this.price * this.qty;
		},
	},
	{
		name: 'cup',
		qty: 1,
		bought: true,
		price: 5,
		amount: function () {
			return this.price * this.qty;
		},
	},
	{
		name: 'iPhone',
		qty: 1,
		bought: true,
		price: 600,
		amount: function () {
			return this.price * this.qty;
		},
	},
	{
		name: 'airpods',
		qty: 2,
		bought: false,
		price: 200,
		amount: function () {
			return this.price * this.qty;
		},
	},
];

//1.1
function showShoppingList(array) {
	console.log('To buy:');
	getNotPurchasedList(array).forEach((el) => {
		console.log(` - ${el.name} - ${el.qty} pcs. - ${el.amount()}$`);
	});
	console.log('Bought:');
	getBoughtList(array).forEach((el) => {
		console.log(` + ${el.name} - ${el.qty} pcs. - ${el.amount()}$`);
	});
}

function getBoughtList(array) {
	return array.filter((product) => product.bought == true);
}

//1.3
function getNotPurchasedList(array) {
	return array.filter((product) => product.bought == false);
}

//1.2
function setPurchased(array, name) {
	array.forEach((el) => {
		if (el.name == name) el.bought = true;
	});
}

//2.1
function removeProduct(array, name) {
	let filtredArray = array.filter((el) => el.name != name);
	array.length = 0;

	// ЭТОТ ВАРИАНТ ПОЧЕМУ-ТО НЕ СРАБОТАЛ.
	// БУДЕТ ПОЛЕЗНО РАЗОБРАТЬ НА УРОКЕ
	// Я ТАК И НЕ ПОНЯЛ ПОЧЕМУ
	// array = [...filtredArray];
	// return array;

	filtredArray.forEach((el) => array.push(el));
}

//2.2
function addProduct(array, name, price, qty = 1, bought = false) {
	let result = false;

	//will execute if product exists in list
	array.forEach((el) => {
		if (el.name == name) {
			el.qty += qty;
			el.price = price;
			result = true;
		}
	});

	//stop function if product existed
	if (result) return;

	array.push({
		name,
		qty,
		bought,
		price,
		amount: function () {
			return this.price * this.qty;
		},
	});
}

//3.1
function getAmoutAllProducts(array) {
	return array.reduce((prev, curr) => {
		return prev + curr.amount();
	}, 0);
}

//3.2
function getAmoutNotPurchasedProducts(array) {
	return getNotPurchasedList(array).reduce((prev, curr) => {
		return prev + curr.amount();
	}, 0);
}

//3.3
function showSortedProduct(array, fromLittle = false) {
	let sortedArray = array.sort((a, b) => {
		return fromLittle ? b.amount() - a.amount() : a.amount() - b.amount();
	});

	sortedArray.forEach((el) => {
		console.log(` + ${el.name} - ${el.qty} pcs. - ${el.amount()}$`);
	});
}

showShoppingList(shoppingList);
console.log('==check==');
// console.log(setPurchased(shoppingList, 'banana'));
// showShoppingList(shoppingList);
//removeProduct(shoppingList, 'cup');
addProduct(shoppingList, 'banana', 8);
showShoppingList(shoppingList);
console.log(getAmoutAllProducts(shoppingList));
console.log(getAmoutNotPurchasedProducts(shoppingList));
showSortedProduct(shoppingList);
console.log('----------');
showSortedProduct(shoppingList, (fromLittle = true));
