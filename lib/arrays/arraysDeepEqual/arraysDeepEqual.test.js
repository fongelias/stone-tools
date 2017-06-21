import assert from 'assert';

import { arraysDeepEqual } from './arraysDeepEqual';


describe('arraysDeepEqual()', () => {

	const case1A = [1,2];
	const case1B = [1,2];
	const case1C = [1,"2"];
	const case2A = [[[1,2],[1,2]]];
	const case2B = [[[1,2],[1,2]]];
	const case2C = [[[1,2],[1,"2"]]];

	//Tests
	it('should return true if values in single dimensional arrays are equal', () => {
		assert(arraysDeepEqual(case1A, case1B));
	})

	it('should return false if values in single dimensional arrays are not equal', () => {
		assert(arraysDeepEqual(case1A,case1C))
	})
	
	it('should return true if values in multi-dimensional arrays are equal', () => {
		assert(arraysDeepEqual(case2A, case2B));
	})

	it('should return false if values in multi-dimensional arrays are not equal', () => {
		assert(arraysDeepEqual(case2A, case2C));
	})
})



