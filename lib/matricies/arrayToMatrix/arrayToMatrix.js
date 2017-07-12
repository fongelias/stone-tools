export function arrayToMatrix(arr,rows,cols) {
	//Pretest for Errors
	if(!Array.isArray(arr)) {
		throw new Error('arrayToMatrix: arr provided is not an array');
	}

	if(!rows || !cols) {
		throw new Error('arrayToMatrix: rows and cols arguments must be specified');
	}

	if(arr.length != rows * cols) {
		throw new Error('arrayToMatrix: array length does not match dimensions of rows * cols');
	}


	//Create Array
	let matrix = [];
	let arrPointer = 0;

	for(var i = 0; i < rows; i++) {
		let rowArray = [];
		for(var j = 0; j < cols; j++) {
			rowArray.push(arr[arrPointer]);
			arrPointer++
		}
		matrix.push(rowArray);
	}
	



	return matrix;
}