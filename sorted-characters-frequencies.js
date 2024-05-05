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


  function  AnyCodeMethod(message) {
    let reqObj = {};

    for (let i = 0; i < message.length; i++) {
        if ( reqObj[message[i]] ) {
            reqObj[message[i]]++
        } else {
            reqObj[message[i]] = 1;
        }

    }

    console.log("AnyCodeMethod", reqObj);

    }

 function charFreq(message) {
    // debugger
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