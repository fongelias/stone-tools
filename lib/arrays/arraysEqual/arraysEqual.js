export const arraysEqual = (arr1, arr2) => {
	return arr1.map((val, i)=>{
		return val === arr2[i];
	}).reduce((prev, curr) => prev && curr);
}