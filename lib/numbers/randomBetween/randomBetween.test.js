import assert from 'assert';


import { randomBetween } from './randomBetween';


describe('randomBetween()', () => {


	it('should return a number', () => {
		assert(typeof randomBetween(0,1) == 'number');
	})

	it('should return a random number within the specified range', () => {
		const warning = "This test has a chance of systematically failing. Please run again in the case of failure";

		const min = 0;
		const max = 1;
		const arrayA = Array(100).fill(randomBetween(min, max));

		let testPassed = true;

		for(var i = 0; i < arrayA.length; i++) {
			if(arrayA[i] < min || arrayA[i] > max) {
				testPassed = false;
			}
		}

		assert(testPassed);

	})

	it('should return a random number within 0 and 1 when arguments not provided', () => {
		const warning = "This test has a chance of systematically failing. Please run again in the case of failure";

		const min = 0;
		const max = 1;
		const arrayA = Array(100).fill(randomBetween(min, max));

		let testPassed = true;

		for(var i = 0; i < arrayA.length; i++) {
			if(arrayA[i] < min || arrayA[i] > max) {
				testPassed = false;
			}
		}

		assert(testPassed);

	})
})






