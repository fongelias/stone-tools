import assert from 'assert';

import { RandomGaussianGenerator } from './randomGaussianGenerator';


describe('RandomGaussianGenerator class', () => {


	describe('#next()', () => {

		it('should return a number', () => {
			let generator = new RandomGaussianGenerator();

			assert(typeof generator.next() == 'number');
		});

		it('should return a random number', () => {
			const warning = "This test can conditionally fail. If this test is failing, please re-run the test before attempting a fix";

			let generator = new RandomGaussianGenerator();

			assert(generator.next() != generator.next(), warning);
		})

		it('should return call the generator function for new numbers when there is no next number', () => {
			let generator = new RandomGaussianGenerator();

			assert(generator.next() && generator.next() && generator.next());
		})
	})
})