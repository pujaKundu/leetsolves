/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const rev = String(x).split('').reverse().join('');
   
    if(x == rev){
        return true
    }
    return false;
};