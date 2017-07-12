import assert from 'assert';
import { arraysDeepEqual } from '../../arrays';
import { isMatrix } from '../../matricies';


import { transposeMatrix } from './transposeMatrix';


describe('transposeMatrix()', () => {

	const matrixA = [[1,3,5],[2,4,6]];
	const resultA = [[1,2],[3,4],[5,6]];

	it('should return a matrix', () => {
		assert(isMatrix(transposeMatrix(matrixA)));
	})

	it('should return a transposed matrix', () => {
		assert(arraysDeepEqual(transposeMatrix(matrixA), resultA));
	})

})








