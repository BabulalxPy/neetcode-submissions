class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        res = []
        for i in range(len(nums)):
            new_list = nums[:i] + nums[i+1:]

            res.insert(i, math.prod(new_list))

        return res
        #brute force solution of mine, complexity -> o(n) * (o(n) + o(n)) = o(n^2)
        #not ideal but keeping it