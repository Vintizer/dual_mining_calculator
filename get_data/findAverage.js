module.exports = (arr) => {
	var deleteExtremums = (arr) => {
		var arrWork = arr.slice();
		var deleteMax = (arr) => {
			let max = 0;
			let maxInd;
			arr.forEach((e, i) => {
				if (e > max) {
					max = e;
					maxInd = i;
				}
			});
			arr.splice(maxInd, 1);
			return arr;
		};
		var deleteMin = (arr) => {
			let min = 1000000000;
			let minInd;
			arr.forEach((e, i) => {
				if (e < min) {
					min = e;
					minInd = i;
				}
			});
			arr.splice(minInd, 1);
			return arr;
		};
		arr = deleteMin(arrWork);
		arr = deleteMax(arr);
		return arr;
	};
	arr = deleteExtremums(arr);
	var res = 0;
	arr.forEach((e) => {
		res += e;
	});
	return res / arr.length;
};