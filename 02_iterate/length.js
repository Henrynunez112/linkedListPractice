const { Node } = require('../01_node/node');

const length = node => {
  let count = 0;
  let curr = node
  while(curr) {

    count += 1;
    curr = curr.next;
  } 
  return count;
  // your code here
  
};


const A = new Node('A');
const B = new Node('B');
const C = new Node('C');
A.next = B;
B.next = C;

console.log(length(A)); // expected: 3
