function reverse(arr) {
  let first = 0;
  let last = arr.length - 1;
  while (first < last) {
    let tmp = arr[first];
    arr[first] = arr[last];
    arr[last] = tmp;

    ++first;
    --last;
  }
  return arr;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(reverse(arr));