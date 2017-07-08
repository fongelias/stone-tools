//Note: Should these checks be insufficient, more will be added in the future
//Structure code to expect more checks
export function isMatrix(value) {
	const isArray = Array.isArray(value);
	const containsArray = Array.isArray(value[0]);

	return isArray && containsArray;
}