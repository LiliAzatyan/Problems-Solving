function indexDifference(arr) {
  if (arr.length === 0) return 0;
  let tmp1 = 0;
  let tmp2 = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[tmp1]) {
      tmp1 = i;
    }
    if (arr[i] < arr[tmp2]) {
      tmp2 = i;
    }
  }
  if (arr[tmp1] > arr[tmp2]) {
    return tmp1 - tmp2;;
  } else {
    return tmp2 - tmp1;
  }
}
const arr = [222, 1, 33, 12, -90, 56, 87, 999];
console.log(indexDifference(arr));