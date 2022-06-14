var playList = [
	{
		author: 'LED ZEPPELIN',
		song: 'STAIRWAY TO HEAVEN',
	},
	{
		author: 'QUEEN',
		song: 'BOHEMIAN RHAPSODY',
	},
	{
		author: 'LYNYRD SKYNYRD',
		song: 'FREE BIRD',
	},
	{
		author: 'DEEP PURPLE',
		song: 'SMOKE ON THE WATER',
	},
	{
		author: 'JIMI HENDRIX',
		song: 'ALL ALONG THE WATCHTOWER',
	},
	{
		author: 'AC/DC',
		song: 'BACK IN BLACK',
	},
	{
		author: 'QUEEN',
		song: 'WE WILL ROCK YOU',
	},
	{
		author: 'METALLICA',
		song: 'ENTER SANDMAN',
	},
];

const player = document.querySelector('.player');
const songList = document.createElement('ul');
player.append(songList);

playList.forEach((el) => {
	const songListItem = document.createElement('li');
	songListItem.textContent = `${el.author} - ${el.song}`;
	songList.append(songListItem);
});

//2
const openButton = document.querySelector('.btn');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.modal__close');

openButton.addEventListener('click', function () {
	modal.classList.add('active');
});

closeButton.addEventListener('click', function () {
	modal.classList.remove('active');
});

//3
const btnNextColor = document.querySelector('.btn-next-color');
const trafficLigthItems = document.querySelectorAll('.traffic-light__item');

let isBottomDirection = true;

btnNextColor.addEventListener('click', function () {
	let indexActiveEl;
	let indexNextActiveEl;

	trafficLigthItems.forEach((element, index) => {
		if (element.classList.contains('active')) indexActiveEl = index;
		element.classList.remove('active');
	});

	isBottomDirection
		? (indexNextActiveEl = indexActiveEl + 1)
		: (indexNextActiveEl = indexActiveEl - 1);

	trafficLigthItems[indexNextActiveEl].classList.add('active');

	if (indexNextActiveEl == 2 || indexNextActiveEl == 0) {
		isBottomDirection = !isBottomDirection;
	}
});
