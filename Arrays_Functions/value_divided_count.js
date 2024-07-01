function valueDivCount(arr) {
    let size = arr.length;
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] / size;
    }
    return arr;
}
const arr = [2, 3, 1, 44, 23];
console.log(valueDivCount(arr));