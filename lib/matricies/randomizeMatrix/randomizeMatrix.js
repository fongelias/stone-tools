import { randomBetween } from '../../numbers';

export function randomizeMatrix(matrix, min = -1, max = 1) {
	return matrix.map(row => row.map(val => randomBetween(min, max)));
}