// http://www.codewars.com/kata/sum-of-digits-slash-digital-root/
function digital_root(n) {
  let N = String(n);
  if (N.length == 1) {
    return +N;
  } else {
    let sum = 0;
    let N = String(n);
    for (i = 0; i < N.length; i++) {
      sum += +N[i];
    }
    return digital_root(sum);
  }
}
