class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        function sortstring(str){
            const arr = str.split("");
            arr.sort();
            const sorted_str = arr.join('');
            return sorted_str;
        }
        return sortstring(s) === sortstring(t);
    };
};
