export function mapMatrix(matrix, func) {
	return matrix.map((row, y) => {
		return row.map((val, x) => {
			return func(val);
		})
	})
}