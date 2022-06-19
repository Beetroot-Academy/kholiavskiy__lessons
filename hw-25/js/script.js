//task1
const textBlock = document.querySelector('.text-show');
const editBlock = document.querySelector('.text-edit');
let pressedKeys = [];

document.addEventListener('DOMContentLoaded', () => {
	editBlock.hidden = true;
});

document.addEventListener('keydown', (event) => {
	pressedKeys.push(event.code);

	if (checkCtrlCombo('KeyE')) {
		editBlock.value = textBlock.textContent.trim();
		textBlock.hidden = true;
		editBlock.hidden = false;
		event.preventDefault();
	}

	if (checkCtrlCombo('Equal')) {
		textBlock.textContent = editBlock.value;
		textBlock.hidden = false;
		editBlock.hidden = true;
		event.preventDefault();
	}

	//check pressing any Ctrl + target keyCode
	function checkCtrlCombo(keyCode) {
		return (
			pressedKeys.length == 2 &&
			pressedKeys.includes(keyCode) &&
			pressedKeys.join(' ').match(/control(left|right)/i)
		);
	}
});

document.addEventListener('keyup', (event) => {
	pressedKeys = pressedKeys.filter((el) => el != event.code);
});

//task2
const sortField = document.getElementById('sort');
const data = document.querySelectorAll('td');
const table = document.querySelector('table');

sortField.addEventListener('click', () => {
	let numbers = [];
	table.innerHTML = `<tr>
  <td id="sort">Sort</td>
  </tr>`;

	data.forEach((el) => {
		if (el.id != 'sort') numbers.push(+el.textContent);
	});

	numbers
		.sort((a, b) => a - b)
		.forEach((el) => {
			table.innerHTML += `<tr>
		  <td>${el}</td>
		  </tr>`;
		});
});

//taks3
const block = document.querySelector('.flexible');
const corner = document.querySelector('.flexible__corner');
const body = document.querySelector('body');

corner.addEventListener('mousedown', (event) => {
	let newWidth, newHeight;
	const startPointX = event.clientX - event.target.parentNode.offsetWidth;
	const startPointY = event.clientY - event.target.parentNode.offsetHeight;
	const minHeight = 80;
	const minWidth = 80;
	body.style.cursor = 'se-resize';

	function moveBlock(event) {
		newWidth = event.clientX - startPointX;
		newHeight = event.clientY - startPointY;

		if (newWidth < minWidth) newWidth = minWidth;
		if (newHeight < minHeight) newHeight = minHeight;

		block.style.width = newWidth + 'px';
		block.style.height = newHeight + 'px';
	}

	document.addEventListener('mousemove', moveBlock);

	document.addEventListener('mouseup', () => {
		document.removeEventListener('mousemove', moveBlock);
		body.style.cursor = 'auto';
	});
});
