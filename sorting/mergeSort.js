function mergeSort(arr) {
  var divisionIndex = Math.round(arr.length / 2);
  var arr1 = arr.splice(0, divisionIndex);
  var arr2 = arr.splice(divisionIndex, arr.length - 1);
  var sorted1, sorted2;

  if(arr1.length > 1) {
    sorted1 = mergeSort(arr1);
  } else {
    sorted1 = arr1;
  }
  if(arr2.length > 1) {
    sorted2 = mergeSort(arr2);
  } else {
    sorted2 = arr2;
  }
  return merge(sorted1, sorted2);
}

function merge(arr1, arr2) {
  var result = [];
  var cursor1 = 0, cursor2 = 0;
  while(cursor1 !== arr1.length || cursor2 !== arr2.length) {
    if(cursor1 === arr1.length) {
      result.push(arr2[cursor2]);
      cursor2++;
    }
    else if(cursor2 === arr2.length) {
      result.push(arr1[cursor1]);
      cursor1++;
    }
    else if(arr1[cursor1] < arr2[cursor2]) {
      result.push(arr1[cursor1]);
      cursor1++;
    }
    else if(arr1[cursor1] > arr2[cursor2]) {
      result.push(arr2[cursor2]);
      cursor2++;
    }
    else {
      result.push(arr1[cursor1]);
      result.push(arr2[cursor2]);
      cursor1++;
      cursor2++;
    }
  }
  return result;
}
