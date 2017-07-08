import assert from 'assert';


import { dimensionsEqual } from './dimensionsEqual';


describe('dimensionsEqual()', () => {

	const arrayA = [[1]];
	const arrayB = [[1],[2]];
	const arrayC = [[3]];


	it('should return a boolean', () => {
		assert(typeof dimensionsEqual(arrayA, arrayB) == 'boolean');
	})

	it('should return the correct answer when false', () => {
		assert(!dimensionsEqual(arrayA, arrayB));
	})

	it('should return the correct answer when true', () => {
		assert(dimensionsEqual(arrayA, arrayC));
	})

})





