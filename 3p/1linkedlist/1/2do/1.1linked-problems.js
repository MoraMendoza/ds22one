/** INSTRUCTIONS
 *
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 *
 * PROBLEM 1
 * contains(v)
 *
 * look up for value v in the linked list
 * @arg {type} v - value; may be of a char, number, u object
 * @returns {bool} - true or false, if value v exist or not
 * may use traverse
 *
 * @example
 * contains(3)
 *
 * @see {@link https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array}
 * @see {@link https://jsdoc.app}
 */
class linklist {
  constructor(nexus = null) {   //hs
    this.nexus = nexus;
  }
  size() {
  let count = 0;
  let nod = this.nexus;   // cambia de node a nod para que no te
    while (nod) {          // confundas
      count++;
      nod = nod.next;
    }
    return count;
  }
clear() {
   this.nexus = null;
  }
 codestart(v) {
    let node = this.nexus;
    while (node != null && node.data != v) node = node.next;
    return node ? true : false;
  }
 getfinal() {
    let finalNode = this.nexus;
    if (finalNode) {
      while ( finalNode.next) {
         finalNode =  finalNode.next;
      }
    }
    return  finalNode;
  }

  getFirst() {
    return this.nexus;
  }

  insert(node) {
    this.getfinal().next = node;
  }
}

class ListNodesPrincipal {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

   let principal = new  ListNodesPrincipal(2);
   let nodeA = new  ListNodesPrincipal(5);
principal.next = nodeA;
  let nodeB = new  ListNodesPrincipal("a");

  nodeA.next = nodeB;

let list = new linklist(principal);

console.log(list.codestart("a"));
