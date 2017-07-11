import assert from 'assert';
import { arraysDeepEqual } from '../../arrays';
import { isMatrix } from '../../matricies';


import { hadamardProduct } from './hadamardProduct';


describe('hadamardProduct()', () => {

	const matrixA = [[1,2],[3,4]];
	const matrixB = [[2,3],[4,5]];
	const matrixC = [[1],[2]];
	const resultAB = [[2,6],[12,20]];


	it('should return a matrix', () => {
		assert(isMatrix(hadamardProduct(matrixA, matrixB)));
	})

	it('should throw an error if input matricies are not the same dimensions', () => {
		let testPassed = false;

		try {
			hadamardProduct(matrixA, matrixC);
		} catch(e) {
			testPassed = true;
		}

		assert(testPassed);
	})

	it('should return the correct product', () => {
		assert(arraysDeepEqual(hadamardProduct(matrixA,matrixB), resultAB));
	})

})


