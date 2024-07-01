function multiplyArrayIndexes(arr1, arr2) {
  let tmp = [];
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; ++i) {
      tmp.push(arr1[i] * arr2[i]);
    }
    return tmp;
  } else {
    return "Arrays lengths are not equal!";
  }
}
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 2, 13, 48, -5];
console.log(multiplyArrayIndexes(arr1, arr2));
