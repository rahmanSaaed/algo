/// charFreq
  // init var chars
  //loop over message
  // get char code
  // increament the array index for every char


  /// printFreq
    // loop over arrayFreq
    // get the char by the code 
    // print code and char

  /// AnyCodeMethod
    // init objectFreq
    // for loop over message 
    // check if letter is exist 
    // count ++
    // else add it to the object and assign 1 to the value 


    /// sortHsh
      //  init varArray
      //  loop over object
      //  push to the array new array contain first el is charCode and the second the freq


    
  function sortHsh(freq) {
    let freqArray = [];
    for (let k of Object.keys(freq)) {
      freqArray.push([k.charCodeAt(0), freq[k]]);
    }


    sort(freqArray, 0, freqArray.length - 1);
  }

  function sort(array, start, end) {
    
    if( start >= end) {
      return;
    } 

    let midPoint = Math.floor((start + end)/ 2);

    sort(array, start, midPoint);
    sort(array, midPoint + 1, end);
    
    merge(array, start, midPoint, end);
    console.log("merge", array);
  }

  function merge(array, start, midPoint, end) {
    let leftArray, rightArray;

    leftArray = array.slice(start, midPoint + 1);
    rightArray = array.slice(midPoint +  1, end + 1);

    let i, j, k;
    i = 0;
    j = 0;
    k = start;

    while (i < leftArray.length && rightArray.length > j) {

      if (leftArray[i][1] <= rightArray[j][1]) {
        array[k] = leftArray[i];
        i++;
        k++
      } else {
        array[k] = rightArray[j];
        j++;
        k++
      }

    } 



    while (leftArray.length > i) {
      array[k] = leftArray[i];
      i++;
      k++;
    }

    while (rightArray.length > j) {
      array[k] = rightArray[j];
      j++;
      k++;
    }


  }


  function  AnyCodeMethod(message) {
    let reqObj = {};
    for (let i = 0; i < message.length; i++) {
        if ( reqObj[message[i]] ) {
            reqObj[message[i]]++
        } else {
            reqObj[message[i]] = 1;
        }
    }
    sortHsh(reqObj)
    }

 function charFreq(message) {
    const chars = new Array(127).fill(0)

    for(let i = 0; i < message.length; i++) {
        let code = message.charCodeAt(i);
        if (chars[code]) {
            chars[code]++;
        } else {
            chars[code] = 1;
        }

        // debugger
        // return chars;

        // printChar(chars, message);
    }

    

    printChar(chars, message);
}


  function printChar(array, message) {
    for(let i = 0; i < array.length; i++) {
        if (array[i]) {
            let char = String.fromCharCode(i);
            console.log(array[i] + " " + char);
        }
    }
  }



  const arrFreq = charFreq("Hellow World");
  AnyCodeMethod("Hellow world");
  console.log("const", arrFreq)