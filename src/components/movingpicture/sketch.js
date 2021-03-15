export default (p) => {
	let angle = p.radians(p.random(360));
	let x = p.width;
	let y = p.height;
	let speed = 1;
	let dirx = speed * p.cos(angle);
	let diry = speed * p.sin(angle);
	let img;
	let dim = p.windowHeight / 5;
	let src;
	let cnv;
	

	p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
		if (props.src) {
			src = props.src
			img = p.loadImage(src);
		}
	}

	p.setup = () => {
		cnv = p.createCanvas(p.windowWidth, p.windowHeight);
		cnv.position(0, 0, 'fixed');
		cnv.style('z-index', '-1000');
	};

	
	p.windowResized = () => {
  	p.resizeCanvas(p.windowWidth, p.windowHeight);
	};

	p.draw = () => {
		if (x < -1 * (p.windowWidth / 2 - dim / 2)) {
			angle = p.radians(p.random(360));
			dirx = speed * p.cos(angle);
			dirx = dirx <= 0 ? -1 * dirx : dirx;
		} else if (x > p.windowWidth / 2 - dim / 2) {
			angle = p.radians(p.random(360));
			dirx = speed * p.cos(angle);
			dirx = dirx >= 0 ? -1 * dirx : dirx;
		}
		if (y < -1 * (p.windowHeight / 2 - dim / 2)) {
			angle = p.radians(p.random(360));
			diry = speed * p.sin(angle);
			diry = diry <= 0 ? -1 * diry : diry;
		} else if (y > p.windowHeight / 2 - dim / 2) {
			angle = p.radians(p.random(360));
			diry = speed * p.sin(angle);
			diry = diry >= 0 ? -1 * diry : diry;
		}
		x = x + dirx;
		y = y + diry;
		p.translate(x, y);
		p.clear();
		p.image(
			img,
			p.windowWidth / 2 - dim / 2,
			p.windowHeight / 2 - dim / 2,
			dim,
			dim
		);
	};
};
