/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const characterCount = {}; // this will store in key-value pairs {'a:2,b:2'} for 'aabb'
    
    for(let idx = 0 ;idx <s.length ; idx++){
        const char = s[idx];
        characterCount[s[idx]] = characterCount[s[idx]] + 1 || 1;
    }
    
    for(let idx = 0 ;idx <s.length ; idx++){
        const char = s[idx];
        if(characterCount[s[idx]] === 1)
            return idx;
    }
    return -1;
};