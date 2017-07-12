export function copyMatrix(matrix) {
	return matrix.map(rows => rows.map(val => val));
}