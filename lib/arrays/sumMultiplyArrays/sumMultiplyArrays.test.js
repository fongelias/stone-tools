import assert from 'assert';


import { sumMultiplyArrays } from './sumMultiplyArrays';



describe('sumMultiplyArrays()', () => {

	const arr1 = [1,2,3];
	const arr2 = [4,5,6];
	const arr3 = [1];
	const arr4 = [];
	const arr5 = [1, false, 6];

	it('should return a number', () => {
		assert(typeof sumMultiplyArrays(arr1, arr2) == 'number');
	})

	it('should throw an error when arrays are not the same length', () => {
		let errorThrown = false;

		try {
			sumMultiplyArrays(arr2, arr3);
		} catch(e) {
			errorThrown = true;
		}

		assert(errorThrown);
	})

	it('should throw an error when arrays are empty', () => {
		let errorThrown = false;

		try {
			sumMultiplyArrays(arr4, arr4);
		} catch(e) {
			errorThrown = true;
		}

		assert(errorThrown);
	})

	it('should throw an error when values are not numbers', () => {
		let errorThrown = false;

		try {
			sumMultiplyArrays(arr5, arr1);
		} catch(e) {
			errorThrown = true;
		}

		assert(errorThrown);
	})

	it('should return the correct result of the arrays', () => {
		assert(sumMultiplyArrays(arr1, arr2) == 32);
	})


})