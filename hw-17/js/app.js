let nameOfUser = prompt('What is your name?');
alert(`Hello ${nameOfUser}!`);

const currentYear = 2022;
let usersDateOfBirthday = prompt('When were you born?');
let ageOfUser = currentYear - +usersDateOfBirthday;
alert(`You are ${ageOfUser}`);

let lengthSideOfSquad = +prompt('Input length side of squad: ');
let perimetr = lengthSideOfSquad ** 2;
alert(`Squad perimetr: ${perimetr}`)

let circleRadius = +prompt('Input circle radius: ');
let circleSquare = Math.PI * (circleRadius ** 2);
alert(`Circle square: ${~~circleSquare}`);

let lengthOfTheWay = +prompt('How many kilometrs between A and B: ');
let timeOfTravell = +prompt('How many hours can you spend for your trip: ');
let speed = lengthOfTheWay / timeOfTravell;
alert(`You should go with speed ${speed} km/h`);

const exchangeRateUsdToEur = 0.94;
let walletInUSD = +prompt('How much USD do you have: ');
let walletInEur = walletInUSD * exchangeRateUsdToEur;
alert(`You have ${walletInEur} EUR`);
