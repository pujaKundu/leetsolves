/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const map = new Map();
    const magLen = magazine.length;
    const ranLen = ransomNote.length;
  
    for(let i=0;i<magLen;i++){
        if(map.has(magazine[i])){
            map.set(magazine[i],map.get(magazine[i])+1);
        }
        else{
            map.set(magazine[i],1);
        }
    }
    
    for(let i=0;i<ranLen;i++){
        if(!map.has(ransomNote[i]) || map.get(ransomNote[i])===0){
            return false;
        }
        map.set(ransomNote[i],map.get(ransomNote[i])-1);
    }
    return true;
};