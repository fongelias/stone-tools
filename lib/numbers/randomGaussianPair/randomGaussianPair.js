//Implements Box-Muller Transformation: http://www.design.caltech.edu/erik/Misc/Gaussian.html
//Values given are essentially deviations from 0, where the average deviation is 1, and the range is unbounded
export function randomGaussianPair() {

	let x1,
		x2,
		w;

	do {
		x1 = 2 * Math.random() - 1;
		x2 = 2 * Math.random() - 1;
		w = x1 * x1 + x2 * x2;
	} while(w >= 1.0);

	w = Math.sqrt( (-2 * Math.log(w)) / w );
	

	return [ x1 * w, x2 * w ];
}