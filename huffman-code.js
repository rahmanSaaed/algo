// build a function to calc a code freq


function calcFreq(string) {
    // debugger;
    var freqObj = { };

    for(let char of string) {
        if (freqObj[char]) {
            freqObj[char] = ++freqObj[char];
        } else {
            freqObj[char] = 1;
        }
    }

    console.log("freqObj", freqObj);
}


calcFreq("hello world");