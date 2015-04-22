
function unshift(arr, val) {
  for(var i = 0; i < arr.length; i++) {
    arr[arr.length - i] = arr[arr.length - 1 - i];
  }
  arr[0] = val;
  return arr.length;
}
