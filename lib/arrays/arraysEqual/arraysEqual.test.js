import assert from 'assert';


import { arraysEqual } from './arraysEqual';



describe('arraysEqual()', () => {

	const arr1 = [1,2];
	const arr2 = [1,2];
	const arr3 = ["1", "2"];
	const arr4 = ["1", "2", "3"];

	it('should return true when values in arrays are equal', () => {
		assert(arraysEqual(arr1, arr2));
	})

	it('should return false when arrays are different length', () => {
		assert(!arraysEqual(arr3, arr4));
	})

	it('should not return true when values arrays are not equal', () => {
		assert(!arraysEqual(arr1, arr3));
	})

	it('should return true when two empty arrays are compared', () => {
		assert(arraysEqual([], []));
	})

	it('should not return an error when an empty array is the first argument', () => {
		assert(!arraysEqual([], arr1));
	})

	it('should not return an error when an empty array is the second argument', () => {
		assert(!arraysEqual(arr1, []));
	})
})