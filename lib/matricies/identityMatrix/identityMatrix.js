export function identityMatrix(size) {
	return Array(size).fill([]).map((row, i) => {
		row = Array(size).fill(0);
		row.splice(i,1,1);
		return row;
	});
}