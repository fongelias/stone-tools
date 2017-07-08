export function matrixDimensions(matrix) {
	if(!Array.isArray(matrix) || !Array.isArray(matrix[0])) {
		throw new Error('matrixDimensions: argument is not a valid matrix');
	}

	return [matrix.length, matrix[0].length];
}