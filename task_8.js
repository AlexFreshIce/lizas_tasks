// https://www.codewars.com/kata/remove-first-and-last-character-part-two
function array(arr) {
  if (!arr) {
    return null;
  }
  let newArr = arr.trim().split(",");
  if (newArr.length < 3) {
    return null;
  }
  newArr.shift();
  newArr.pop();
  let newStr = newArr.join(" ");
  return newStr;
}
