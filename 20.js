/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < s.length; i++) {
    let item = map[s[i]];
    if (item) stack.push(item);
    else if (s[i] != stack.pop()) return false;
  }
  return stack.length === 0;
};
