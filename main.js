class Pokemon {
	constructor(name, hull, firepower, accuracy) {
		this.name = name;
		this.hull = hull;
		this.firepower = firepower;
		this.accuracy = accuracy;
	}
	fire(enemy) {
		if (this.accuracy <= randomDec(0, 1)) {
			enemy.hull -= this.firepower;
			console.log(
				`Magikarp used its secret move....SPLASH on ${enemy.name} for ${this.firepower} barely any damage${enemy.name} has ${this
					.hull} health left, and shes pissed`
			);
		} else {
			console.log(`but nothing happened! ${enemy.name}!`);
		}
	}
	retreat() {
		console.log('Jigglypuff won, she squeals I AM YOUR GOD NOW');
	}
}

const magikarp = new Pokemon('Shiny Magikarp', 20, 5, 0.7);

const randomInt = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomDec = (min, max) => {
	let num = Math.random() * (max - min) + min;
	return Math.round(num * 10) / 10;
};

const jigz = [];

const wildJigz = () => {
	for (var i = 1; i < 7; i++) {
		let newJigz = new Pokemon(`Jigglypuff ${i}`, randomInt(3, 6), randomInt(2, 4), randomDec(0.6, 0.8));

		jigz.push(newJigz);
	}
};

wildJigz();
console.log(jigz);



const battle = () => {
	if (jigz[0].hull > 0 && magikarp.hull > 0) {
		magikarp.fire(jigz[0]);
		jigz[0].fire(magikarp);
		if (jigz[0].hull <= 0) {
			jigz.shift();
		} else {
			let choice = prompt('A hoard of wild Jigglypuffs have killed Nana with a switchblade, will you battle them or flee?');
			if (choice.toLowerCase() == 'battle' || choice.toLowerCase() == '') {
				battle();
			} else {
				alert('Im sorry Nana!!');
			}
		}
	}
};

for (var i = 0; i < 6; i++) {
	battle();
	console.log(jigz[0]);
	console.log(magikarp);
	if (jigz.length === 0) {
		alert('YO THAT JACKET IS TIGHT SON NAAA MEAAAAN');
	} else if (magikarp.hull <= 0) {
		alert('YOU DIED. EVEN DEAD NANAS DISSAPOINTMENT CUTS WORSE THAN JIGGLYPUFFS SWITCHBLADE');
  }}