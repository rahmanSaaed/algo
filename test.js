function segregate(array, start, end) {
    debugger
    if (end <= start) {
        return;
    }

    // debugger
    // divie
    let mid = Math.floor((start + end) / 2);
    segregate(array, start, mid);
    segregate(array, mid + 1, end);
    merge(array, start, mid, end);
}

function merge(array, start, mid, end) {
    debugger

    // //  add right and left to arrays
    let leftLength = mid - start + 1;
    let rightLength = end - mid;

    let leftArray = new Array(leftLength);
    let rightArray = new Array(rightLength);

    for (let i = 0; i < leftLength; i++) {
        leftArray[i] = array[start + i];
    }

    for (let j = 0; j < rightLength; j++) {
        rightArray[j] = array[mid + 1 + j];
    }

    let i = 0;
    let j = 0;
    let k = start;

    // filter nrgative naumber
    while (i < leftLength && leftArray[i] <= 0) {
        array[k] = leftArray[i];
        i++;
        k++;
    }

    while (j < rightLength && rightArray[j] <= 0) {
        array[k] = rightArray[j];
        j++;
        k++;
    }

    // add remaining
    while (i < leftLength) {
        array[k] = leftArray[i];
        i++;
        k++;
    }
    while (j < rightLength) {
        array[k] = rightArray[j];
        j++;
        k++;
    }
}

let array = [6, -5, 12, 10, -9, -1];
console.log(array);
segregate(array, 0, array.length - 1);
console.log(array);

// divide
