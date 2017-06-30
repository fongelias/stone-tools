import assert from 'assert';


import { factorOfTen } from './factorOfTen';


describe('factorOfTen()', () => {

	const numb1 = [1,0];
	const numb2 = [12845,4];
	const numb3 = [-100, 2];

	it('should return 0 for a single digit value', () => {
		assert(factorOfTen(numb1[0]) == numb1[1]);
	})

	it('should reurn 4 for a number in the 10,000s', () => {
		assert(factorOfTen(numb2[0]) == numb2[1]);
	})

	it('should return the same magnitude for a negative number', () => {
		assert(factorOfTen(numb3[0]) == numb3[1]);
	})
})