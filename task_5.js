// https://www.codewars.com/kata/get-the-middle-character
function getMiddle(s) {
  let middle;
  if (s.length % 2 == 0) {
    middle = s.length / 2;
    return s[middle - 1] + s[middle];
  } else {
    middle = 1 + (s.length - 1) / 2;
    return s[middle - 1];
  }
}
