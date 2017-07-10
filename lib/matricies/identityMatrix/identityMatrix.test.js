import assert from 'assert';
import { arraysDeepEqual } from '../../arrays';
import { isMatrix, multiplyMatricies } from '../../matricies';


import { identityMatrix } from './identityMatrix';


describe('identityMatrix()', () => {

	const matrixA = [[1,2],[3,4]];


	it('should return a matrix', () => {
		assert(isMatrix(identityMatrix(2)));
	})

	it('should return a matrix with the correct dimensions', () => {
		const idMatrix = identityMatrix(3);
		assert(idMatrix.length == 3 && idMatrix[0].length == 3);
	})

	it('should return an identity Matrix', () => {
		const result = multiplyMatricies(identityMatrix(2), matrixA);
		assert(arraysDeepEqual(matrixA, result));
	})
})