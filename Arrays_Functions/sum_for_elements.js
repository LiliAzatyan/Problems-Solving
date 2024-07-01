function sumElements(arr) {
  let tmp = 0;
  for (let i = 0; i < arr.length; i++) {
    tmp += arr[i];
  }
  return tmp;
}
const arr = [1, 22, -11, 77, 8, 3];
console.log(sumElements(arr));
