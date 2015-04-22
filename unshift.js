function unshift(arr, value) {
  for(var i = 0; i < arr.length; i++) {
    arr[arr.length - i] = arr[arr.length - 1 - i];
  }
  arr[0] = value;
  return arr.length;
}
