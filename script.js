



class Shape {
	constructor(background, width, height = width) {
		this.background = background;
		this.width = width;
		this.height = height;
	}
	draw() {
		let div = document.createElement('div');
		document.body.insertAdjacentElement('afterbegin', div)

		div.style.background = this.background;
		div.style.width = this.width + 'px';
		div.style.height = this.height + 'px';
		div.style.margin = 50 + 'px'


	}
}



class Square extends Shape {
	constructor(background, width, height) {
		super(background, width, height)

	}
}
let square = new Square('red', 50);
square.draw();


class Circle extends Shape {
	constructor(background, width, height) {
		super(background, width, height)

	}
	draw() {
		let div = document.createElement('div');
		document.body.insertAdjacentElement('afterbegin', div)

		div.style.background = this.background;
		div.style.width = this.width + 'px';
		div.style.height = this.height + 'px';
		div.style.borderRadius = 50 + '%'
		div.style.margin = 50 + 'px'
	}
}
let circle = new Circle('green', 150);
circle.draw();

class Triangle extends Shape {
	constructor(background, width, height) {
		super(background, width, height)

	}
	draw() {
		let div = document.createElement('div');
		document.body.insertAdjacentElement('afterbegin', div)
		div.style.background = 'none';
		div.style.width = 0 + 'px';
		div.style.height = 0 + 'px';
		div.style.borderLeft = `${this.width / 2}px solid transparent`;
		div.style.borderRight = `${this.width / 2}px solid transparent`;
		div.style.borderBottom = `${this.height}px solid ${this.background}`;
		div.style.margin = 50 + 'px'
	}
}
let triangle = new Triangle('blue', 250, 100);
triangle.draw();
