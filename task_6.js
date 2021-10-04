// https://www.codewars.com/kata/partition-on
function partitionOn(pred, items) {
  let trueArr = [];
  let falseArr = [];
  let summArr = [];
  let boundaryIndex;
  items.forEach((element) => {
    if (pred(element)) {
      trueArr.push(element);
    } else {
      falseArr.push(element);
    }
  });
  summArr = summArr.concat(falseArr, trueArr);
  boundaryIndex = falseArr.length;
  for (let i = 0; i < items.length; i++) {
    items[i] = summArr[i];
  }
  return boundaryIndex;
}
