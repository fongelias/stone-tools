import assert from 'assert';
import { isMatrix } from '../../matricies';
import { arraysDeepEqual } from '../../arrays';


import { emptyMatrix } from './emptyMatrix';


describe('emptyMatrix()', () => {

	const matrixA = [[0,0],[0,0]];

	it('should return a matrix', () => {
		assert(isMatrix(emptyMatrix(4,4)));
	})

	it('should return a matrix with the correct dimensions', () => {
		assert(emptyMatrix(3,2).length == 3 && emptyMatrix(3,2)[0].length == 2);
	})

	it('should return a matrix filled with zeros', () => {
		assert(arraysDeepEqual(emptyMatrix(2,2),matrixA));
	})

})








