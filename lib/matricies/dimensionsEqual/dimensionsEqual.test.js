import assert from 'assert';


import { dimensionsEqual } from './dimensionsEqual';


describe('dimensionsEqual()', () => {

	const matrixA = [[1]];
	const matrixB = [[1],[2]];
	const matrixC = [[3]];


	it('should return a boolean', () => {
		assert(typeof dimensionsEqual(matrixA, matrixB) == 'boolean');
	})

	it('should return the correct answer when false', () => {
		assert(!dimensionsEqual(matrixA, matrixB));
	})

	it('should return the correct answer when true', () => {
		assert(dimensionsEqual(matrixA, matrixC));
	})

})





