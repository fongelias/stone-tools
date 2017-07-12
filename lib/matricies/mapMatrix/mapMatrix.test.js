import assert from 'assert';
import { arraysDeepEqual } from '../../arrays';
import { isMatrix, emptyMatrix } from '../../matricies';


import { mapMatrix } from './mapMatrix';


describe('mapMatrix()', () => {

	const toZero = () => 0;
	const matrixA = [[0,0],[0,0]];
	const matrixB = emptyMatrix(2,2);


	it('should return a matrix', () => {
		assert(isMatrix(mapMatrix(matrixA, toZero)));
	})

	it('should return the correct matrix', () => {
		assert(arraysDeepEqual(mapMatrix(matrixA,toZero),matrixB));
	})

	it('should throw an error if argument is not a matrix', () => {
		let testPassed = false;

		try {
			mapMatrix("String", toZero);
		} catch(e) {
			testPassed = true;
		}

		assert(testPassed);
	})

	it('should throw an error if a function is not supplied', () => {
		let testPassed = false;

		try {
			mapMatrix(matrixA);
		} catch(e) {
			testPassed = true;
		}

		assert(testPassed);
	})

})





