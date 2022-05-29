//min 
//1
const userAge = +(prompt('What is your age? :'))

switch (true) {
  case (userAge >= 0 && userAge <= 11):
    alert('You are child.') 
    break;
  case (userAge >= 12 && userAge <= 17):
    alert('You are teenager.')
    break;
  case (userAge >=18 && userAge <= 59):
    alert('You are adult')
    break;
  case (userAge >= 60):
    alert('You are pensioner')
    break;
  default:
    alert('Error..')
    break;
}

//2
const num = +(prompt('Input number in range 0-9:'));

switch (num) {
  case 0:
    alert(')');
    break;
  case 1:
    alert('!');
    break;
  case 2:
    alert('@');
    break;
  case 3:
    alert('#');
    break;
  case 4:
    alert('$');
    break;
  case 5:
    alert('%');
    break;
  case 6:
    alert('^');
    break;
  case 7:
    alert('&');
    break;
  case 8:
    alert('*');
    break;
  case 9:
    alert('(');
    break;
  default:
    alert('error')
    break;
}

//3
const rangeStart = +(prompt('Input first number of your range: '))
const rangeEnd = +(prompt('Input last number of your range: '))
let result = 0;

for (let i = rangeStart; i <= rangeEnd; i++) {
  result += i; 
}

alert(`Summ = ${result}`)

//4
const firstNum = +(prompt('Input first num: '))
const secondNum = +(prompt('Input second num: '))
let divider;

for( let i = 1; ; i++ ) {
    if (i > firstNum && i > secondNum) break;
    if (firstNum % i == 0 && secondNum % i == 0) divider = i;
};

alert (`The biggest divider is ${divider}`);

//5
const numFiveTask = +(prompt('Input number: '))

for (let i = 1; i <= numFiveTask; i++) {
  if (numFiveTask % i == 0) console.log(`${i} is divider of ${numFiveTask}`);
}


///norm
//1
const fiveDigitNum = +(prompt('Please, Input five-digit number'));

if (fiveDigitNum.length == 5 && (+fiveDigitNum > 0))  {
    if (fiveDigitNum[0] == fiveDigitNum[4] && fiveDigitNum[1] == fiveDigitNum[3]) {
        alert(`${fiveDigitNum} is PALINDROM`);
    } else {
        alert(`${fiveDigitNum} is NOT palindrom`);
}
} else {
    alert('Please, Input five-digit number');
}

//2
const amountOfPurchase = +(prompt('Input amount of your purchase $: '));

if (amountOfPurchase < 200) {
    alert(`If you spend ${200 - amountOfPurchase} $ more, you will get 3% discount.`)
} else if (amountOfPurchase >= 200 && amountOfPurchase < 300){
    alert (`You should pay ${amountOfPurchase / 100 * 97}`)
} else if (amountOfPurchase >= 300 && amountOfPurchase < 500) {
    alert (`You should pay ${amountOfPurchase / 100 * 95}`)
} else {
    alert (`You should pay ${amountOfPurchase / 100 * 93 }`)
}

//3
const tenNumbers = prompt('Please, Input ten numbers and use space beetween them');
const arrayTenNumbers = tenNumbers.split(' ', 10);

let positivNum = 0;
let negativNum = 0;
let zeroNum = 0;
let oddNum = 0;
let evenNum = 0;

for (let i = 0; i < arrayTenNumbers.length; i++) {
    if (arrayTenNumbers[i] > 0) positivNum++;
    if (arrayTenNumbers[i] < 0) negativNum++;
    if (arrayTenNumbers[i] == 0) zeroNum++ ;
    arrayTenNumbers[i] % 2 == 0 ? oddNum++ : evenNum++;
};

alert(`${positivNum} positive, ${negativNum} negative, ${zeroNum} zeroes, ${oddNum} odd and ${evenNum} even`);

//4
const daysOfWeek = 'Monday Tuesday Wednesday Thursday Friday Saturday Sunday';
const arrayDaysOfWeek = daysOfWeek.split(' ');
let res = true;
let n = 0;

do {
    res = confirm(`${arrayDaysOfWeek[n]}. Do you wanna see next day?`);
    n == arrayDaysOfWeek.length - 1 ? n = 0 : n++ ;
} while (res == true);