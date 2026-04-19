class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleanstr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
        let rev = cleanstr.split("").reverse().join("");
        return cleanstr === rev;
    }
}
