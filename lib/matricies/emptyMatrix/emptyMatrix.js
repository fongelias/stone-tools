export function emptyMatrix(rows,cols) {
	let matrix = [];
	for(var i = 0; i < rows; i++) {
		matrix.push(Array(cols).fill(0));
	}

	return matrix;
}