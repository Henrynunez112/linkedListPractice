const { Node } = require('./node');

/**
 * Create a linked list with three nodes, A -> B -> C
 * There are many ways you can do this!
 */
const list = new Node('A');

const name = new Node('H');
const name2 = new Node('E');
const name3 = new Node('N');
const name4 = new Node('R');
const name5 = new Node('Y');


name.next = name2;
name2.next = name3;
name3.next = name4;
name4.next = name5;



// your code here

console.log(JSON.stringify(name));

/**
 * Create a linked list that spells your first or last name.
 * Example: K -> E -> L -> L -> Y
 * (Why are double letters tricky?)
 */
