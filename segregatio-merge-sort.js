
function segregate(array, start, end) {

  if (start >= end) {
    return
  }

  let mid = Math.floor((start + end) / 2)
  segregate(array, start, mid);
  segregate(array, mid + 1, end);
  merge(array, start, mid, end);

}

function merge(array, start, mid, end) {
// debugger
  let leftArray, rightArray;
  leftArray = array.slice(start, mid + 1);
  rightArray = array.slice(mid + 1, end + 1);


   // //  add right and left to arrays
  //  let leftLength = mid - start + 1;
  //  let rightLength = end - mid;

  //  let leftArray = new Array(leftLength);
  //  let rightArray = new Array(rightLength);

  //  for (let i = 0; i < leftLength; i++) {
  //      leftArray[i] = array[start + i];
  //  }

  //  for (let j = 0; j < rightLength; j++) {
  //      rightArray[j] = array[mid + 1 + j];
  //  }
   
  let i, j, k;
  i = 0;
  j = 0;
  k = start;

  while (leftArray.length > i && leftArray[i] <= 0) {
    array[k] = leftArray[i];
    i++;
    k++;
  }

  while (rightArray.length > j && rightArray[j] <=0) {
    array[k] = rightArray[j];
    j++;
    k++
  }


while (i < leftArray.length) {
  array[k] = leftArray[i];
  i++;
  k++;
}

while (j < rightArray.length) {
  array[k] = rightArray[j];
  j++;
  k++;
}


}




let array = [6, -5, 12, 10, -9, -1];
let start = 0;
let end = array.length - 1;
segregate(array, start, end);
console.log(array);


// split
  // left
  // right
  // merge

// merge
  // split two arrays
  // assign negatives ( from leftArray to rightArray ) to left of main array
  // assign remaining to main array 
