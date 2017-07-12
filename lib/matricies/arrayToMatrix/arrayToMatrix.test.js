import assert from 'assert';
import { arraysDeepEqual } from '../../arrays';
import { isMatrix } from '../../matricies';


import { arrayToMatrix } from './arrayToMatrix';


describe('arrayToMatrix()', () => {

	const arrayA = [1,2,3,4,5,6];


	it('should return a matrix', () => {
		assert(isMatrix(arrayToMatrix(arrayA,3,2)));
	})

	it('should throw an error when the input is not an array', () => {
		let testPassed = false;

		try {
			arrayToMatrix("A String",3,2);
		} catch(e) {
			testPassed = true;
		}

		assert(testPassed);
	})

	it('should throw an error when the input is not of adequate length', () => {
		let testPassed = false;

		try {
			arrayToMatrix(arrayA,5,5);
		} catch(e) {
			testPassed = true;
		}

		assert(testPassed);
	})

	it('should throw an error when no spatial arguments are provided', () => {
		let testPassed = false;

		try {
			arrayToMatrix(arrayA);
		} catch(e) {
			testPassed = true;
		}

		assert(testPassed);
	})

	it('should return the correct matrix', () => {
		const resultA = [[1,2],[3,4],[5,6]];

		assert(arraysDeepEqual(arrayToMatrix(arrayA,3,2),resultA));
	})
})







