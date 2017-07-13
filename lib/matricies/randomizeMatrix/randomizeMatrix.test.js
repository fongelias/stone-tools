import assert from 'assert';
import { isMatrix, emptyMatrix } from '../../matricies';
import { arraysDeepEqual } from '../../arrays';


import { randomizeMatrix } from './randomizeMatrix';


describe('randomizeMatrix()', () => {

	const matrixA = emptyMatrix(3,3);
	const matrixB = emptyMatrix(10,10);

	it('should return a matrix', () => {
		assert(isMatrix(randomizeMatrix(matrixA, 0, 10)));
	})

	it('should return a matrix with values between the specified values', () => {
		const min = 0;
		const max = 10;

		const randomMatrix = randomizeMatrix(matrixA,min,max);
		let testPassed = true;

		for(var y = 0; y < randomMatrix.length; y++) {
			for(var x = 0; x < randomMatrix[0].length; x++) {
				let curr = randomMatrix[y][x];
				if(curr >= max  || curr <= min) {
					testPassed = false;
				}
			}
		}

		assert(testPassed);
	})

	it('should return a random matrix', () => {
		const warning = "This test can conditionally fail. If this test is failing, please re-run the test before attempting a fix";
		const randomMatrixA = randomizeMatrix(matrixB, 0, 100);
		const randomMatrixB = randomizeMatrix(matrixB, 0, 100);

		assert(!arraysDeepEqual(randomMatrixA,randomMatrixB));
	})

	it('should default to values between -1 and 1 when no range arguments are provided', () => {
		const min = -1;
		const max = 1;

		const randomMatrix = randomizeMatrix(matrixA);
		let testPassed = true;

		for(var y = 0; y < randomMatrix.length; y++) {
			for(var x = 0; x < randomMatrix[0].length; x++) {
				let curr = randomMatrix[y][x];
				if(curr >= max  || curr <= min) {
					testPassed = false;
				}
			}
		}

		assert(testPassed);
	})

})








