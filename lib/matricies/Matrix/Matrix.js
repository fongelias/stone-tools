import { copyMatrix, addMatricies, emptyMatrix, 
		 subtractMatricies, mapMatrix, hadamardProduct, 
		 matrixDimensions, matrixToArray, randomizeMatrix, 
		 transposeMatrix } from '../../matricies';


export class Matrix {
	constructor(rowsOrMatrix, cols) {

		if(arguments.length == 0) {
			throw new Error('Matrix: no arguments provided');
		}

		if(arguments.length == 2) {
			this.matrix = emptyMatrix(rowsOrMatrix, cols);
		}

		if(arguments.length == 1) {
			this.matrix = copyMatrix(rowsOrMatrix);
		}
	}



	copy() {
		return new Matrix(copyMatrix(this.matrix));
	}


	add(matrix) {
		if(matrix instanceof Matrix) {
			this.matrix = addMatricies(this.matrix, matrix.matrix);
		} else {
			this.matrix = addMatricies(this.matrix, matrix);
		}
		

		return this;
	}


	subtract(matrix) {
		if(matrix instanceof Matrix) {
			this.matrix = subtractMatricies(this.matrix, matrix.matrix);
		} else {
			this.matrix = subtractMatricies(this.matrix, matrix);
		}
		

		return this;
	}


	map(func) {
		return new Matrix(mapMatrix(this.matrix, func));
	}


	hadamardProduct(matrix) {
		if(matrix instanceof Matrix) {
			this.matrix = hadamardProduct(this.matrix, matrix.matrix);
		} else {
			this.matrix = hadamardProduct(this.matrix, matrix);
		}
		

		return this;
	}


	dimensions() {
		return matrixDimensions(this.matrix);
	}


	toArray() {
		return matrixToArray(this.matrix);
	}


	randomize(min, max) {
		this.matrix = randomizeMatrix(this.matrix, min, max);

		return this;
	}


	transpose() {
		this.matrix = transposeMatrix(this.matrix);

		return this;
	}
}










