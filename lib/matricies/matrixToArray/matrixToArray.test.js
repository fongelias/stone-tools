import assert from 'assert';
import { arraysEqual } from '../../arrays';


import { matrixToArray } from './matrixToArray';


describe('matrixToArray()', () => {

	const matrixA = [[1,2],[3,4],[5,6]];
	const arrayA = [1,2,3,4,5,6];


	it('should return an Array', () => {
		assert(Array.isArray(matrixToArray(matrixA)));
	})

	it('should throw an error when the input is not a matrix', () => {
		let testPassed = false;

		try {
			matrixToArray(arrayA);
		} catch(e) {
			testPassed = true;
		}

		assert(testPassed);
	})

	it('should return the correct array', () => {
		assert(arraysEqual(matrixToArray(matrixA),arrayA));
	})
})





