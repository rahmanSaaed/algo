

function mergeSort(array, start, end) {
    if (start >= end) {
        return
    }

   let mid = Math.floor((start + end) / 2)

    mergeSort(array, start, mid);
    mergeSort(array, mid + 1, end);
    merge(array, start, mid, end);

}

 function merge(array, start, mid, end) {
    let leftArray, rightArray;
    leftArray = array.slice(start, mid + 1);
    rightArray = array.slice(mid + 1, end + 1);

    let i, j, k;
    i = 0; 
    j = 0;
    k = start;

    while(i < leftArray.length && rightArray.length > j) {
        if (leftArray[i] < rightArray[j] ) {
            array[k] = leftArray[i];
            i++;
            k++;

        } else {
            array[k] = rightArray[j];
            j++;
            k++;
        }
    }

    while(leftArray.length > i) {
        array[k] = leftArray[i];
        i++;
        k++;
    }

    while(rightArray.length > j) {
        array[k] = rightArray[j];
        j++;
        k++;
    }
}


// Example usage:
let array = [12, 11, 13, 5, 6, 7];
mergeSort(array, 0, array.length - 1);
console.log("Sorted array:", array);


//mergeSort
  // baseCase
  // calc mid point 
  // mergeSort
  // mergeSort
  // merge

// merge
  // left Array
  // right Array
  // init i, j, k
  // combare two Arrayes and assign to main Array
  // assign remain items to main Array

 
