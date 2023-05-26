/* 
给定一个排序数组和一个目标值，在数组中找到目标值，
并返回其索引。
如果目标值不存在于数组中，
返回它将会被按顺序插入的位置。

请必须使用时间复杂度为 O(log n) 的算法。
*/

function searchInsert(nums,target){
    // let result;
    // nums.forEach((v,i) => {
    //     if(v >= target){
    //         result = i;
    //     }
    // })
    // if(nums[nums.length - 1] < target){
    //     result = nums.length;
    // }
    
    // return result;
    // O(log n)时间复杂度：二分查找，折半查找
    let low = 0,
        high = nums.length - 1,
        mid;
    while(low <= high){
        mid = Math.floor((low + high) / 2);
        if(nums[mid] === target){
            return mid;
        }else if(nums[mid] > target){
            high = mid - 1;
        }else{
            low = mid + 1;
        }
    }
    return low;
}

let result = searchInsert([1,3,5,7,9,10,15,21],11)
console.log(result);