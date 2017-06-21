import assert from 'assert';


import { arraysEqual } from './arraysEqual';



describe('arraysEqual()', () => {

	const arr1 = [1,2];
	const arr2 = [1,2];
	const arr3 = ["1", "2"];

	it('should return true when values in arrays are equal', () => {
		assert(arraysEqual(arr1, arr2));
	})

	it('should not return true when values arrays are not equal', () => {
		assert(!arraysEqual(arr1, arr3));
	})
})