import { emptyMatrix } from '../../matricies';


export function transposeMatrix(matrix) {

	let newMatrix = emptyMatrix(matrix[0].length, matrix.length);

	return newMatrix.map((row, y) => {
		return row.map((val, x) => {
			return matrix[x][y];
		})
	})
}