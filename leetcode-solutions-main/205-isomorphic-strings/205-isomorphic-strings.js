/**
 We have to use hashmap
 If the number of times a character of the first string matches with the number of times a character appears in the second string
 For the first example, 'egg' and 'add'
 e:0
 g:2
 
 a:0
 d:2
 So they are isomorphics
 In case of 'foo' and 'bar'
 f:0
 o:2
 
 b:0
 a:1
 r:1
 Not isomorphic
 */


var isIsomorphic = function(s, t) {
    let obj1={},obj2={};
    for(let i=0;i<s.length;i++){
        if(obj1[s[i]]!==obj2[t[i]]){
            return false;
        }
        else{
            obj1[s[i]] = i;
            obj2[t[i]] = i;
        }
    }
    return true;
};