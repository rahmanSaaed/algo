

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

 









//// Another Solution ////


// function mergeSort(arr) {
//     debugger
//     // Base case: if the array has 0 or 1 element, it is already sorted
//      if (arr.length <=1) {
//         return arr;
//     }

//     // Divide the array into two halves
//     const mid = Math.floor(arr.length / 2);
//     const leftHalf = arr.slice(0, mid);
//     const rightHalf = arr.slice(mid);

//     // Recursively sort each half
//     const sortedLeftHalf = mergeSort(leftHalf);
//     const sortedRightHalf = mergeSort(rightHalf);

//     // Merge the sorted halves
//     return merge(sortedLeftHalf, sortedRightHalf);
// }

// function merge(left, right) {

//     debugger

//     let merged = [];
//     let leftIndex = 0;
//     let rightIndex = 0;

//     // Compare elements from both arrays and merge them in sorted order
//     while (leftIndex < left.length && rightIndex < right.length) {
//         if (left[leftIndex] < right[rightIndex]) {
//             merged.push(left[leftIndex]);
//             leftIndex++;
//         } else {
//             merged.push(right[rightIndex]);
//             rightIndex++;
//         }
//     }

//     // Add remaining elements from left array
//     while (leftIndex < left.length) {
//         merged.push(left[leftIndex]);
//         leftIndex++;
//     }

//     // Add remaining elements from right array
//     while (rightIndex < right.length) {
//         merged.push(right[rightIndex]);
//         rightIndex++;
//     }

//     return merged;
// }

// // Example usage:
// const arr = [12, 11, 13, 5, 6, 7];
// const sortedArr = mergeSort(arr);
// console.log("Sorted array:", sortedArr);


// // functions 1. mergeSort 2. merge

// // merge inputes: array
//   // return :  Base case: if the array has 0 or 1 element, it is already sorted
//   // Divide the array into two halves
//   // repeat the process 

// // merge  inputes: left:Arr, right:Arr

