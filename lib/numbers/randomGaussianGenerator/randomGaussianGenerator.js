import { randomGaussianPair } from '../../numbers';

export class RandomGaussianGenerator {
	
	next() {
		if(this.storedValue) {
			const value = this.storedValue;
			this.storedValue = null;
			return value;
		} else {
			const pair = randomGaussianPair();
			this.storedValue = pair[1];
			return pair[0];
		}
	}
}