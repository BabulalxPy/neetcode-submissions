class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        var hashset = new Set();
        for(let i of nums){
            if(hashset.has(i)){
                return true;
            };
            hashset.add(i);
        };
        return false;
    }
}