function selection() {
    let newArr = [ 0 ];
    let i = 1;
    let j = 0;

    for(; i < arr1.length; i++) {
        if(arr1[i] >= arr2[j]) {
            newArr.push(i);

            j = i;
        }
    }

    console.log("newArr", newArr);
}


const arr1 = [9, 10, 11, 12, 13, 15];
const arr2 = [11, 11, 12, 14, 15, 16];
selection(arr1, arr2);




//// selection
    // newArr = [ 0 ];
    // i = 1; j = 0;
    // for arr1 i < arrq.length 1++
    // if arr1[1] <= arr2[j]
       // newArr.push(); 
       // j  = i;
     // else  // 
      