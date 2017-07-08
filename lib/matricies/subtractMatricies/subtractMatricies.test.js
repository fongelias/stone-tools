import assert from 'assert';
import { arraysDeepEqual } from '../../arrays';

import { subtractMatricies } from './subtractMatricies';

describe('subtractMatricies()', () => {

	const matrixA = [[1,2],[3,4]];
	const matrixB = [[4,3],[2,1]];
	const matrixC = [[1,2]];

	const resultAB = [[-3,-1],[1,3]];


	it('should return a matrix', () => {
		const result = subtractMatricies(matrixA, matrixB);
		assert(Array.isArray(result) && Array.isArray(result[0]));
	})

	it('should throw an error when matricies are not the same dimensions', () => {
		let testPassed = false;

		try {
			subtractMatricies(matrixA, matrixC);
		} catch(e) {
			testPassed = true;
		}

		assert(testPassed);
	})

	it('should return the correct value', () => {
		assert(arraysDeepEqual(subtractMatricies(matrixA, matrixB), resultAB));
	})
})