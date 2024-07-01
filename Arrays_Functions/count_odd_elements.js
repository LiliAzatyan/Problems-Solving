function countOddElements(arr) {
    let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      ++count;
    }
  }
  return count;
}
const arr = [22, 1, 34, 5, -13];
console.log(countOddElements(arr));