import { matrixDimensions } from '../../matricies';
import { arraysEqual } from '../../arrays';


export function dimensionsEqual(matrix1, matrix2) {
	return arraysEqual(matrixDimensions(matrix1), matrixDimensions(matrix2));
}