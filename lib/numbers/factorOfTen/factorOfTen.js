export function factorOfTen(number) {
	return number % 10 == number ? 0 : 1 + factorOfTen(number / 10);
}