import assert from 'assert';
import { arraysDeepEqual } from '../../arrays';
import { isMatrix } from '../../matricies';


import { copyMatrix } from './copyMatrix';


describe('copyMatrix()', () => {

	const matrixA = [[0,1],[1,0]];

	it('should return a matrix', () => {
		assert(isMatrix(copyMatrix(matrixA)));
	})

	it('should return a copy of the original matrix', () => {
		let matrix1 = [[1,0]];
		let matrix2 = copyMatrix(matrix1);
		matrix1[0][0] = 0;

		assert(arraysDeepEqual(matrix2,[[1,0]]));
	})
})







