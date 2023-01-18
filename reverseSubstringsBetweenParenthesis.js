//https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/submissions/880550111/
/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
  const stack = [];
  let top;
  stack.push("");
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      stack.push(""); //if a string is ( , push ''
      console.log("first", stack);
    } else if (s[i] == ")") {
      top = stack.pop();
      stack[stack.length - 1] += top.split("").reverse().join("");
      console.log("top", top);
      console.log("second", stack);
    } else {
      stack[stack.length - 1] += s[i];
      console.log("third", stack);
    }
  }
  return stack.pop();
};

/**
(u(love)i)
*
1. loop through the string
2. first char is (, so we will push ''
3. push every non ) char in the stack . stack will look like this [ '', 'u', 'love' ]
4. when we find a ) char, remove top element , here 'love'
5. reverse the top element , love --> evol and add it in the stack

 */
