const answer = document.querySelector('.answer');
const img = document.querySelector('img');

const restaurantList = [
	'Orginal Burger',
	'3burger',
	'Carmnik Kantyna',
	'Rednek by stah',
	'Sexy Bull',
	'ChoNoTu BURGER',
	'Kobo Burger',
	'Burger Majster',
	'Burger Stacja',
	'My Burger',
	'Burgermania',
	'Baranola',
	'Fit Burger',
	'Big Burger',
	'Craft Burger',
];
const answerOption = [
	'Zapraszamy do',
	'Wybierz się koniecznie do',
	'Warto spróbować zjeść w',
];
const randomAnswer = () => {
	if (restaurantList.length > 0) {
		const randomR = Math.floor(Math.random() * restaurantList.length);
		const randomA = Math.floor(Math.random() * answerOption.length);
		answer.innerHTML = `${answerOption[randomA]} <span>${restaurantList[randomR]}</span>!`;
		restaurantList.splice(randomR, 1);
	} else {
		answer.innerHTML = `Przykro mi. Niestety skończyły nam się restauracje!`;
	}
	img.classList.remove('shake-animation');
};
const animate = () => {
	img.classList.add('shake-animation');
	setTimeout(randomAnswer, 1000);
};

img.addEventListener('click', animate);
document.addEventListener('keyup', (e) => {
	if (e.key === 'Enter') {
		animate();
	}
});
