class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        
        const isanagram= (str1, str2)=>{
            function sortstring(string){
                const arr = string.split("");
                arr.sort();
                const sorted_str = arr.join('');
                return sorted_str;
            }
            return sortstring(str1) === sortstring(str2);
        }

        const groups = [];

        for(const str of strs){

            let foundgroup = false;
            
            for(const group of groups){
                if(group.length>0 && isanagram(str, group[0])){
                    group.push(str);
                    foundgroup = true;
                    break;
                }
            }
            if(!foundgroup){
                groups.push([str]);
            }
        }
        return groups;
        
    }
}
