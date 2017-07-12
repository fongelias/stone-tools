import { isMatrix } from '../../matricies';

export function matrixToArray(matrix) {
	if(!isMatrix(matrix)) {
		throw new Error('matrixToArray: input is not a matrix');
	}

	return matrix.reduce((p,c) => {
		return p.concat(c.reduce((prev,curr) => {
			prev.push(curr);
			return prev;
		}, []))
	}, [])
}