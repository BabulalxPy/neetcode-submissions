class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        let counts = {};
        let countt = {};
        for(let i = 0; i < s.length; i++){
            counts[s[i]] = 1 + (counts[s[i]] || 0);
            countt[t[i]] = 1 + (countt[t[i]] || 0);
        };
        for(let c in counts){
            if(counts[c] !== (countt[c] || 0)){
                return false;
            }
        };
        return true;

        function sortstring(str){
            const arr = str.split("");
            arr.sort();
            const sorted_str = arr.join('');
            return sorted_str;
        }
        return sortstring(s) === sortstring(t);

        if(s.length !== t.length){
            return false;
        };

    };
};
