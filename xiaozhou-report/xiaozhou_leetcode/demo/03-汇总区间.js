// leetcode力扣原题
var summaryRanges = function (nums) {
	// nums 示例 [1,2,3,7,8,9,19,20,21,31]
	let newList = [],
		resultList = [];
	for (let i = 0; i < nums.length; i++) {
		if (i === 0 || nums[i] - 1 != nums[i - 1]) {
			newList.push([nums[i]])
		} else {
			let len = newList.length;
			newList[len - 1].push(nums[i])
		}
	}
	for (let i = 0; i < newList.length; i++) {
		if (newList[i].length === 1) {
			resultList.push(newList[i][0].toString())
		}else{
			let len = newList[i].length;
			let str = newList[i][0] +
								"->" +
								newList[i][len-1]
			resultList.push(str);
		}
	}

	return resultList
}

console.log(summaryRanges([1, 2, 3, 7, 8, 9, 19, 20, 21, 31]))