const inputs = [...document.querySelectorAll(`input`)];

function update () {
	const suffix = this.dataset.sizing || ``;
	console.log(this.value);
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input =>input.addEventListener(`change`, update))
inputs.forEach(input =>input.addEventListener(`mousemove`, update))
