import assert from 'assert';
import { arraysEqual } from '../../arrays';

import { randomGaussianPair } from './randomGaussianPair';



describe('randomGaussianPair()', () => {

	it('should return an array with two values', () => {
		assert(Array.isArray(randomGaussianPair()) && randomGaussianPair().length == 2);
	})

	it('should return random numbers', () => {
		const warning = "This test has a chance of systematically failing. Please run again in the case of failure";
		let testPassed = true;

		for(let i = 0; i < 100; i++) {
			if(arraysEqual(randomGaussianPair(), randomGaussianPair())) {
				testPassed = false;
			}
		}

		assert(testPassed);
	})
}) 