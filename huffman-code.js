
function calcFreq(string) {
    var freqObj = { };

    for(let char of string) {
        if (freqObj[char]) {
            freqObj[char] = ++freqObj[char];
        } else {
            freqObj[char] = 1;
        }
    }

    return freqObj;
}


class Node {

    constructor(char, freq) {
        this.char = char;
        this.freq = freq;
        this.left = null;
        this.right = null;
    }

}

class PriorityQueue {

    constructor() {
        this.queue = [];
    }

    enqueue(node) {
        this.queue.push(node);
        this.queue.sort((a, b) => a.freq - b.freq);
    }

    dequeue() {
       return this.queue.shift()
    }

    isEmpty() {
        this.queue.length === 0;
    }

}


function buildHuffmanTree(freqMap) {
    const priorityQueue = new PriorityQueue();

    for (const [char, freq] of Object.entries(freqMap)) {
        priorityQueue.enqueue(new Node(char, freq));
    }

    while (priorityQueue.queue.length > 1) {
        const left = priorityQueue.dequeue();
        const right = priorityQueue.dequeue();
        const parent = new Node(null, left.freq + right.freq);
        parent.left = left;
        parent.right = right;
        priorityQueue.enqueue(parent)
    }

    const tree = priorityQueue.dequeue();
    debugger
    return tree;

}


function generateCodes(root, currentCode, codMap) {

    if (!root) {
        return;
    }

    if(root.char) {
        codMap[root.char] = currentCode;
    }

    generateCodes(root.left, currentCode + '0', codMap);
    generateCodes(root.right, currentCode + '1', codMap);

}


function huffmanEncoding(freqMap) {
    const root = buildHuffmanTree(freqMap);
    const codesMap = {};
    generateCodes(root, "", codesMap);
    return codesMap;
}

// build freq map
// build huffman tree
  // create node
  // cteate hashtable
  // build tree function
// generate code


const huffmanCodes = huffmanEncoding(calcFreq("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."));
// const huffmanCodes = huffmanEncoding(calcFreq("internet"));
console.log(huffmanCodes);




