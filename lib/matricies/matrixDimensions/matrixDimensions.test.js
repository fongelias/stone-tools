import assert from 'assert';
import { arraysEqual } from '../../arrays';


import { matrixDimensions } from './matrixDimensions';


describe('matrixDimensions()', () => {

	const arrayA = [
		[1],
		[2],
		[3],
	]
	const resultA = [3,1];
	const arrayB = [1,2,3,4];


	it('should return an array', () => {
		assert(Array.isArray(matrixDimensions(arrayA)));
	})

	it('should throw an error if the array is not two dimensional', () => {
		let testPassed = false;

		try {
			matrixDimensions(arrayB);
		} catch(e) {
			testPassed = true;
		}

		assert(testPassed);
	})

	it('should return a correct value', () => {
		assert(arraysEqual(matrixDimensions(arrayA),resultA))
	})
})