// function insertionSort(arr) {
//     debugger;
//       const n = arr.length;
//       for (let i = 1; i < n; i++) {
//           let current = arr[i];
//           let j = i - 1;
///               arr[j + 1] = arr[j];
//               j--;
//           }
//           arr[j + 1] = current;
//       }
//       return arr;
//   }


// 1- n = arr.length
// 2- for i = 1; i < n ; i++
// 3- while backowrd j => 0 && arr[j] > arr[j + 1];



 function insertionSort(arr) {
    debugger
    var n = arr.length
    var i = 1;
    j = (i - 1);
    for (var i = 1; i < n; i++) {
      var  current = arr[i];
      j = (i - 1);
    //   var  j =( i - 1);

        while(j >= 0 && (arr[j] > current)) {
           arr[j + 1] = arr[j];
           j--
        }
        arr[j + 1] = current;
    }
    return arr
}






  
  // Example usage:
  const array = [5, 2, 4, 6, 1, 3];
  console.log("Original array:", array);
  const sortedArray = insertionSort(array.slice()); // Passing a copy of the array to keep the original intact
  console.log("Sorted array:", sortedArray);
  


// use cases 
// 1- when j == -1 so break wwhenh !( j >= 0  )
// 2- .. arr[j] > current so break when !( arr[j] > current )