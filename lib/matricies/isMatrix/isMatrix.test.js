import assert from 'assert';


import { isMatrix } from './isMatrix';


describe('isMatrix()', () => {

	const matrixA = [[1],[2]];
	const notMatrixA = [1,2];


	it('should return true if the value is a matrix', () => {
		assert(isMatrix(matrixA));
	})

	it('should return false if the value is not a matrix', () => {
		assert(!isMatrix(notMatrixA))
	})
})