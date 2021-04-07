const keys = [...document.querySelectorAll(`.key`)];

function playSound(evt) {
	evt.preventDefault();

	const audio = document.querySelector(`audio[data-key="${evt.keyCode}"]`)
	const key = document.querySelector(`div[data-key="${evt.keyCode}"]`)

	if (!audio) return;

	key.classList.add('playing');
	audio.currentTime = 0;
	audio.play();
}

function removeTransition(evt) {
	evt.preventDefault();

	if (evt.propertyName !== 'transform') return;

	evt.target.classList.remove('playing');
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener(`keydown`, playSound);
