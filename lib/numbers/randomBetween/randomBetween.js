export function randomBetween(min = 0, max = min + 1) {
	return Math.random() * (max - min) + min;
}