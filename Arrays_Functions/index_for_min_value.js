function minIndex(arr) {
    let tmp = 0;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[tmp]) {
        tmp = i;
      }
    }
    return tmp;
  }
  const arr = [23, -12, 4, 2, 1, 0, 92];
  console.log(minIndex(arr));
  