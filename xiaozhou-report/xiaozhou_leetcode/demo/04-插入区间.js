var insert = function (intervals, newInterval) {
	// intervals [[1,2],[3,10],[12,16]]
	// newInterval  [4,8]
	let listA = [],
			listB = [],
			[m,n] = newInterval;
	for(let i = 0;i<intervals.length;i++){
		if(intervals[i][1] < newInterval[0]){
			listA.push(intervals[i])
		}else{
			m = intervals[i][0] < newInterval[0] ?
					intervals[i][0] : newInterval[0] 
			break;
		}
	}
	for(let i=intervals.length-1;i>=0;i--){
		if(intervals[i][0] > newInterval[1]){
			listB.push(intervals[i])
		}else{
			n = intervals[i][1] > newInterval[1] ?
					intervals[i][1] : newInterval[1]
			break;
		}
	}
	return listA.concat([[m,n]],listB);
}
/* 
	输入：intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
输出：[[1,2],[3,10],[12,16]]
解释：这是因为新的区间 [4,8] 与 [3,5],[6,7],[8,10] 重叠
*/

console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]],[4,8]))