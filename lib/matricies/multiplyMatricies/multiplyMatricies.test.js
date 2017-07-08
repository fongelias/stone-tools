import assert from 'assert';
import { arraysDeepEqual } from '../../arrays';


import { multiplyMatricies } from './multiplyMatricies';


describe('multiplyMatricies()', () => {


	const matrixA = [[1,2],[3,4]];
	const matrixB = [[5,6],[7,8]];
	const scalarA = 2;
	const scalarB = 3;

	const scaledMatrix_AA = [[2,4],[6,8]];
	const productMatrix_AB = [[19,22],[43,50]];

	it('should return a matrix', () => {
		assert(Array.isArray(multiplyMatricies(matrixA, matrixB)) && Array.isArray(multiplyMatricies(matrixA, matrixB)[0]));
	})

	it('should throw an error if at least one input is not a matrix', () => {
		let testPassed = false;

		try {
			multiplyMatricies(scalarA, scalarB);
		} catch(e) {
			testPassed = true
		}

		assert(testPassed);
	})

	it('should throw an error if an input is neither a scalar nor a matrix', () => {
		let testPassed = false;

		try {
			multiplyMatricies("String", matrixA);
		} catch(e) {
			testPassed = true;
		}

		assert(testPassed);
	})

	it('should return the correct product between a matrix and a scalar', () => {
		assert(arraysDeepEqual(multiplyMatricies(scalarA, matrixA), scaledMatrix_AA));
	})

	it('should return the correct product between a matrix and a matrix', () => {
		assert(arraysDeepEqual(multiplyMatricies(matrixA, matrixB), productMatrix_AB));
	})
})







