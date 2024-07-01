function maxValue(arr) {
  let tmp = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[tmp]) {
      tmp = i;
    }
  }
  return arr[tmp];
}
const arr = [11, 22, 3, 4, 51, 6, 7, 86, 9];
console.log(maxValue(arr));
