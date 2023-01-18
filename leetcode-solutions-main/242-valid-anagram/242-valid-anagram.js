/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
   
    const sr = s.split('').sort().join();
    const tr = t.split('').sort().join();
    if(sr === tr)
        return true;
    return false;
};