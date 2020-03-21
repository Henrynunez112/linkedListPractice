/**
 * Make a linked list that spells the letters
 * of your favorite food.
 *
 * Create your own Node class from scratch to do this!
 * DO NOT import the Node class from ./node.js
 */


 class Node {
     constructor(val){
        this.val = val,
        this.next = null
     }
 }

 const food = new Node('P');
 const food2 = new Node('i');
 const food3 = new Node('z');
 const food4 = new Node('z');
 const food5 = new Node('a');

 food.next = food2;
 food2.next = food3;
 food3.next = food4;
 food4.next = food5;

 console.log(JSON.stringify(food))