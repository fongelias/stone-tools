export const arraysEqual = (arr1, arr2) => {
	if(arr1.length == 0 && arr2.length == 0) {
		return true;
	}

	return arr1.length == arr2.length ? 
		arr1.map((val, i)=> val === arr2[i])
			.reduce((prev, curr) => prev && curr) :
		false;
}