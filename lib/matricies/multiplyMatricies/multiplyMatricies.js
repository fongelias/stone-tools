import { isMatrix } from '../../matricies';

export function multiplyMatricies(value1, value2) {
	if(!(isMatrix(value1) || typeof value1 == 'number') ||
	   !(isMatrix(value2) || typeof value2 == 'number')) {
		throw new Error('multiplyMatricies: arguments must be matricies or scalars');
	}

	if(!(isMatrix(value1) || isMatrix(value2))) {
		throw new Error('multiplyMatricies: arguments must contain at least contain one matrix');
	}


	if(typeof value1 == 'number') {
		return value2.map(row => row.map(val => val * value1));

	} else if(typeof value2 == 'number') {
		return value1.map(row => row.map(val => val * value2));

	} else {

		if(value1[0].length != value2.length) {
			throw new Error('multiplyMatricies: matrix1 columns length != matrix2 rows length');
		}


		let columns = value2[0].map((val, x) => {
			return value2.reduce((p,c) => {
				p.push(c[x]);
				return p;
			}, [])
		})

		return value1.map((row, y) => {
			return columns.map((val, x) => {
				return row.reduce((p,c,i) => p + c * columns[x][i], 0)
			})
		})
	}
}