/** INSTRUCTIONS
 *
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 *
 * PROBLEM 1
 * create a linked-list with 1000-random-names
 * 'name3', 'name99', ..., 'name7'
 *
 * then look 'name7' up
 * returns true
 *
 * then look 'name3007' up
 * returns false
 *
 * use the method contains
 *
 * @see {@link https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array}
 * @see {@link https://jsdoc.app}
 */
class LinkedList {
  constructor(nexus = null) {
    this.nexus = nexus;
  }
   get size() {
    let count = 0;
    let node = this.nexus;
    while (node) {
      count++;      // recordatorio para mi sigue orden 
      node = node.next;
    }
    return count;
  }

  clear() {
    this.nexus = null;
  }

  contains(v) {
    let node = this.nexus;
    while (node != null && node.data != v) node = node.next;
    return node ? true : false;
  }

  getfinal() {
    let 	FinalNode = this.nexus;
    if (FinalNode) {
      while (FinalNode.next) {      // RFER
        FinalNode = FinalNode.next;
      }
    }
    return FinalNode;
  }

  getFirst() {
    return this.nexus;
  }

  prepend(n) {
    n.next = this.nexus;
    this.nexus = n;
  }

  append(n) {
    let last = this.getfinal();
    if (last) last.next = n;
    else this.nexus = n;
  }

  traverse(v) {
    let node = this.nexus;
    for (let i = 1; i < v; i++) {
      node = node.next;
    }
    return node;
  }
}

class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

  
class Queue {
  constructor() {
    this.list = new LinkedList();
  }

  
  
  enqueueF1(v) {
    this.list.append(new ListNode(v));
  }

  
  F2queue() {
    let first = this.list.getFirst();
    if (first) {
      this.list.nexus = first.next;
      return first.data;
    }
    return null;
  }

  toString() {
    let str2 = "";
    let node = this.list.getFirst();
    let back = this.list.getfinal();
    while (node) {
      str2 += `${node.data}${back == node ? "." : ", "}`;
      node = node.next;
    }
    return str2 ? str2 : null;
  }

  empty() {
    this.list.clear();
  }

  get front() {
    let first = this.list.getFirst();
    return first ? first.data : null;
  }

  get back() {
    return this.list.getfinal();
  }
}

class Stack {
  constructor() {
    this.list = new LinkedList();
  }
  push(v) {
    this.list.append(new ListNode(v));
  }

  pop() {
    if (this.list.size > 1) {
      let secondToLast = this.list.traverse(this.list.size - 1);
      let last = secondToLast.next;
      secondToLast.next = null;
      return last.data;
    } else if (this.pk()) {
      let data = this.pk();
      this.empty();
      return data;
    } else return null;
  }

  pk() {
    let last = this.list.getfinal();
    return last ? last.data : null;
  }

  toString() {
    let str3 = "";
    
    let node3 = this.list.getFirst();
    let back3 = this.list.getfinal();
    while (node3) {
      str3 += `${node3.data}${back3 == node3 ? "." : ", "}`;
      node3 = node3.next;
    }
    return str3 ? str3 : null;
  }

  empty() {
    this.list.clear();
  }
}

  
  
let queueA = new Queue();
  queueA .enqueueF1(4);
  queueA.enqueueF1(6);
   queueA .enqueueF1(10);
  console.log(queueA .toString());
  console.log(queueA .F2queue());
  console.log(queueA .F2queue());
console.log(queueA .F2queue());
console.log(queueA .toString());

  
  
  
let stackA = new Stack();
stackA.push(1);
stackA.push(2);
stackA.push(3);
console.log(stackA.toString());
console.log(stackA.pop());
console.log(stackA.toString());
console.log(stackA.pop());
console.log(stackA.toString());
console.log(stackA.pop());
console.log(stackA.toString());
