export function sumMultiplyArrays(arr1, arr2) {
	if(arr1.length != arr2.length) {
		throw new Error('Arrays are not the same length');
	}

	if(arr1.length == 0 || arr2.length == 0) { 
		throw new Error('One or more of the arrays are empty');
	}

	return arr1.reduce((prev, curr, i) => {
		if(typeof prev != 'number' || typeof curr != 'number') {
			throw new Error('Value at index ' + i + ' is not a number');
		}

		if(i <= 1) {
			prev = prev * arr2[i - 1];
		}

		return prev + curr * arr2[i];
	})

}