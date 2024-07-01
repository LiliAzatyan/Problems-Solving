function sumMaxMinValue(arr) {
  if (arr.length === 0) return 0;
  let tmp1 = 0;
  let tmp2 = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > tmp1) {
      tmp1 = i;
    }
    if (arr[i] < tmp2) {
      tmp2 = i;
    }
  }
  return arr[tmp1] + arr[tmp2];
}
const arr = [11, 23, -45, 2, 34, 1];
console.log(sumMaxMinValue(arr));
