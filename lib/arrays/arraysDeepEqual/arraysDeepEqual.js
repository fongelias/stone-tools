export const arraysDeepEqual = (arr1, arr2) => {
	if(arr1.length !== arr2.length) {
		return false;
	}

	arr1.forEach((val, i) => {
		if (Array.isArray(val) && Array.isArray(arr2[i])) {
			if (!arraysDeepEqual(val, arr2[i])) {
				return false;
			}
		} else if (val !== arr2[i]) {
			return false;
		}
	})

	return true;
}