import { dimensionsEqual } from '../../matricies';

export function addMatricies(matrix1, matrix2) {

	if(!dimensionsEqual(matrix1, matrix2)) {
		throw new Error('addMatricies: matrix dimensions not equal');
	}

	return matrix1.map((row, y) => {
		return row.map((value, x) => {
			return value + matrix2[y][x];
		})
	})

}