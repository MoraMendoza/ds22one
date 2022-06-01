/** INSTRUCTIONS
 * 
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 * 
 * 
 * PROBLEM 1
 * inorder(n)
 *
 * traverses a tree in INORDER
 * @arg {tree} n - tree
 *
 * @example
 * inorder(root)
 * 
 * PROBLEM 2
 * posorder(n)
 *
 * traverses a tree in POSORDER
 * @arg {tree} n - tree
 *
 * @example
 * posorder(root)
 * 
 */
class Node {
  constructor(data, left, right) {
      this.data = data;
      this.left = left;
      this.right = right;
  }
//recordatorio para mi declara y abrevia en inglés,salen mas cortas las palabras
  show() {
    return this.data;
  }
}

class L {
  constructor() {
    this.root = null;
  }
  insert(data) {
    let n = new Node(data, null, null);
    if (this.root == null) {
      this.root = n;
    } else {
      let cur = this.root;
      let pren;
      while (true) {
        pren = cur;
        if (data < cur.data) {
          cur = cur.left;   //corrige
          if (cur == null) {
            pren.left = n;
            break;
          }
        } else {
          cur = cur.right;
          if (cur == null) {
            pren.right = n;
            break;
          }
        }
      }
    }
  }

  
  inOrder(node = this.root) {
    if (!(node == null)) {
      this.inOrder(node.left);
      console.log(node.show() + " ");
      this.inOrder(node.right);
    }
  }

  postOrder(node = this.root) {
    if (!(node == null)) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.show() + " ");
     }
     }
}

  let numer = new L();
numer.insert(23);
numer.insert(45);
numer.insert(16);
numer.insert(37);
numer.insert(3);
numer.insert(99);
numer.insert(22);
console.log("Inorder");
numer.inOrder(numer.root);
console.log("Postorder");
numer.postOrder(numer.root);
