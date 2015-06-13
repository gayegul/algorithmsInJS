//O(n2) sorting algorithm which moves elements one at a time into the correct position

function insertionSort(arr) {
  for(var i = 1; i < arr.length; i++) {
    for(var j = 0; j < i; j++) {
      if(arr[j] > arr[i]) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  // return arr; // If the function mutates the input, don't return it
  // as the result is already visible outside.
}
