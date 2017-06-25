import assert from 'assert';

import { arraysDeepEqual } from './arraysDeepEqual';


describe('arraysDeepEqual()', () => {

	const case1A = [1,2];
	const case1B = [1,2];
	const case1C = [1,"2"];
	const case2A = [[[1,2],[1,2]]];
	const case2B = [[[1,2],[1,2]]];
	const case2C = [[[1,2],[1,"2"]]];
	const case2D = [[[1,2],[1,"2","3"]]];

	//Tests
	it('should return true if values in single dimensional arrays are equal', () => {
		assert(arraysDeepEqual(case1A, case1B));
	})

	it('should return false if values in single dimensional arrays are not equal', () => {
		assert(!arraysDeepEqual(case1A,case1C))
	})
	
	it('should return true if values in multi-dimensional arrays are equal', () => {
		assert(arraysDeepEqual(case2A, case2B));
	})

	it('should return false if values in multi-dimensional arrays are not equal', () => {
		assert(!arraysDeepEqual(case2A, case2C));
	})

	it('should return false if the number of elements is not equal', () => {
		assert(!arraysDeepEqual(case2C, case2D));
	})

	it('should return true when comparing empty arrays', () => {
		assert(arraysDeepEqual([], []))
	})
})



