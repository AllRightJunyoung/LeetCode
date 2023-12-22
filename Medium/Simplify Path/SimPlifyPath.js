/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let newPath = path.split("/").filter((value) => value.length !== 0);
  newPath = newPath.filter((value) => value !== ".");
  let answer = [];
  let stack = [];

  for (let i = 0; i < newPath.length; i++) {
    if (newPath[i] === "..") {
      if (stack.length > 0) {
        stack.pop();
      }
    } else {
      stack.push(newPath[i]);
    }
  }
  for (let i = 0; i < stack.length; i++) {
    answer += `/${stack[i]}`;
  }
  if (answer.length === 0) {
    return "/";
  }
  return answer;
};
simplifyPath("/a/./b/../../c/");

simplifyPath("/home/");
simplifyPath("/../");

simplifyPath("/home//foo/");
simplifyPath("/home///foo/bar//tree/../");
