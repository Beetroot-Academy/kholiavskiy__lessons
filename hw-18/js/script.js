//// min

//1
const result = (0.1 + 0.2).toFixed(1);
console.log(result);

//2
let string = '1';
let number = 2;
const res = +string + number;
console.log(res);

//3
const memorySizeGb = prompt("What size of your memory card? (use GB): ")
const memorySizeMb = 1024 * parseInt(memorySizeGb);
const filesCounter = ~~(memorySizeMb / 820);
alert(`You can download ${filesCounter} file(s)`);

////norm

//1
const userWallet = parseInt(prompt('How much $ do you have? :'))
const chokolatePrice = parseInt(prompt('What is the price of the chokolate? :')) 
const chokolatesToBuy = ~~(userWallet / chokolatePrice)
const restWallet = userWallet % chokolatePrice;
alert(`You can buy ${chokolatesToBuy} pcs and you will have ${restWallet} $`)

//2
const num = prompt ('Please, input number with 3 symbols');
let firstNum = num % 10;
let secondNum = (num % 100 - firstNum)/ 10;
let thirdNum = (num - (num % 100 - firstNum) - firstNum )/ 100;
alert(`${firstNum}${secondNum}${thirdNum}`);

//max

//1
const deposit = parseInt(prompt('How much $ do you want to put on your account? :'))
let periodMonths = 2;
const profit = (deposit * 0.05 * periodMonths/12)/100
alert(`You will get ${profit.toFixed(2)} $`) 

//2
2 && 0 && 3 // 0
2 || 0 || 3 // 2
2 && 0 || 3 // 3