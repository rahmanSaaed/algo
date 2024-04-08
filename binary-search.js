function binarySearch(arr, target) {
debugger
    let  mid, left, right;

    arr = arr;
    left = 0;
    right = arr.length - 1;
    // mid = floor((left + right) / 2);

    while (left <= right) {
        mid = Math.floor((left + right) / 2);

        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = left - 1;
        }
    }

    return - 1;
}

// Binary Search Test
const arr = [2, 3, 4, 10, 40];
const target = 10;

const result = binarySearch(arr, target);

if (result !== -1) {
    console.log("Element found at index:", result);
} else {
    console.log("Element not found in the array");
}




    // let left = 0;
    // let right = arr.length - 1;
    
    // while (left <= right) {
    //     let mid = Math.floor((left + right) / 2);
        
    //     if (arr[mid] === target) {
    //         return mid;
    //     } else if (arr[mid] < target) {
    //         left = mid + 1;
    //     } else {
    //         right = mid - 1;
    //     }
    // }
    
    // return -1;