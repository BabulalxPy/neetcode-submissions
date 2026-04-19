class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let prevMap = new Map();
        for( let i = 0; i< nums.length; i++){
            const currentNum = nums[i];
            const complement = target - currentNum;

            if(prevMap.has(complement)){
                return [prevMap.get(complement), i];
            };
            prevMap.set(currentNum, i);
        }
        return [];
    }
}
