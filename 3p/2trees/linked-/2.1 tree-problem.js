class Node {
  constructor(data) {
        this.data = data; 
      this.childr = [];
  }

  toString() {
    let strin = `${this.data} => `;
    this.childr.forEach((child) => {
      strin += child.data + " ";  /// childr = children
    });
    return strin;
  }
}

class Tree {
  constructor() {
     this.root = null;
  }

  add(data, toNodeData) {
    const nodes = new Node(data);
    const Prent = toNodeData ? this.findBFS(toNodeData) : null;
 
    
    
    if (Prent) {
      Prent.childr.push(nodes); // recordario para mi revisa bien esto 
    } else {
      if (!this.root) {
        this.root = nodes;
      } else {
        return "fail";
      }
    }
  }

  findBFS(data) {
    let rnode = null;

    this.traverseBFS((node) => {
      if (node.data == data) {
        
        rnode = node;
      }
    });
    return rnode;
  }

  traverseBFS(cb) {
    const inqueu = [this.root];    //encola

    if (cb) {
      while (inqueu.length) {
        
        const node = inqueu.shift();

        cb(node);

        for (const child of node.childr) {
          inqueu.push(child);
          
        }
      }
    }
  }
}

let treeFinal = new Tree();
treeFinal .add("A"); 
treeFinal .add("B", "A"); 
treeFinal .add("C", "A");
treeFinal .add("D", "B");
treeFinal .add("E", "B");

treeFinal .traverseBFS((node) => console.log(node.toString()));
